import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
  providers: [MessageService]
})
export class LoginComponent {
  UserName:string;
  password:string;

  succmessage: Message[];
 

  visable:boolean=true;
  changetype:boolean=true;
  userloginsucessmessage:Message [];

  viewpress(){
    this.visable = ! this.visable;
    this.changetype=! this.changetype;
  }
  ishidden=false;
  @ViewChild('mylogin') form :NgForm;

 

  constructor(private router:Router,private services:ServicesService , private activatedroute:ActivatedRoute,
    private messageService: MessageService
    ){}

  loginUserAccount(){
    
                 this.services.usercheck(this.UserName,this.password)
                 .subscribe(
                  response =>{
                    if(response == true){
                      localStorage.setItem('empbooleanvalue',"true");
                      localStorage.setItem('username',this.UserName);
                      this.router.navigate(['/HOME']);
                    }
                    else{

                      this.messageService.add({ severity: 'error', summary: 'user password', detail: 'write the correct password' });
                    
                      
                    }
                  },
                  (err:HttpErrorResponse)=>{
                    this.messageService.add({ severity: 'error', summary: ' user account', detail: err.error });

                   
                  },
                  () => {
                  this.userloginsucessmessage=  [
                      {
                        severity: 'success', 
                        summary: 'user login completelly successfull', 
                        detail:""
                      }
                    ]
                  });
                  
                 
  }

  reset(){
   this.form.reset();
  }
  ngOnInit(){
   localStorage.setItem('loginpage',"true");
    if(localStorage.getItem('empbooleanvalue')=='true'){
        this.router.navigate(['/HOME']);       
    }
  }
  
}

