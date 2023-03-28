import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { Message } from 'primeng/api';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, tap } from 'rxjs/operators';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserName:string;
  password:string;

  succmessage: Message[];
  errormessage:Message[];
  passwordmessage:Message[];

  ishidden=false;
  @ViewChild('mylogin') form :NgForm;

  

  constructor(private router:Router,private services:ServicesService){}




  login(mylogin){
//     this.services.username=this.form.value.UserName;
//  console.log(this.form.value.UserName)
//     this.services.password=this.form.value.password;
//     console.log(this.form.value.password)
  //  console.log(this.form.value.UserName)

                 this.services.usercheck(mylogin)
                 .subscribe(
                  response =>{
                    if(response == true){
                      localStorage.setItem('username',mylogin.value.UserName);
                      this.router.navigate(['/HOME']);
                    }
                    else{
                        this.passwordmessage=[
                          {
                            severity: 'error', 
                         summary: ' user password', 
                         detail: "write the correct password"}
                          
                        ]
                    }
                  },
                  (err:HttpErrorResponse)=>{
                    this.errormessage=
                    [
                      {
                        severity: 'error', 
                        summary: ' user account', 
                        detail:err.error
                      }
                    ]
                  },
                  () => {
                  this.succmessage=  [
                      {
                        severity: 'Sucees', 
                        summary: ' user account', 
                        detail:"completed sucess"
                      }
                    ]
                  });
                  
                 
  }

  reset(){
   this.form.reset();
  }
  
  
}

