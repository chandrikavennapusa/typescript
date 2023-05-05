import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { Message, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, tap } from 'rxjs/operators';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  // ngmodel username
  userName: string;
  //ngmodel password
  password: string;
  // eyeicon disabled
  visable: boolean = true;
  //eyeicon changes
  changetype: boolean = true;
  // sucessmessage
  userloginsucessmessage: Message[];
  @ViewChild('mylogin') form: NgForm;
 

  constructor(
    private router: Router,
    private services: ServicesService,
    private activatedroute: ActivatedRoute,
    private messageService: MessageService
  ) {}
      
  ngOnInit() {
    if (localStorage.getItem('empbooleanvalue') == 'true') {
      this.router.navigate(['/HOME']);
    }
  }

  // eyeicon changes
  viewPress() {
    this.visable = !this.visable;
    this.changetype = !this.changetype;
  }

  // submission login useraccount
  loginUserAccount() {
    this.services.checkingUserExistance(this.userName, this.password).subscribe(
      (response) => {
        if (response == true) {
          localStorage.setItem('empbooleanvalue', 'true');
          localStorage.setItem('username', this.userName);
          this.router.navigate(['/HOME']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'user password',
            detail: 'write the correct password',
          });
        }
      },
      (err: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'error',
          summary: ' user account',
          detail: err.error,
        });
      },
      () => {
        this.userloginsucessmessage = [
          {
            severity: 'success',
            summary: 'user login completelly successfull',
            detail: '',
          },
        ];
      }
    );
  }

  // Reset all input fields
  resetInputFields() {
    this.form.reset();
  } 
}
