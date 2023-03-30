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

  visable:boolean=true;
  changetype:boolean=true;

  viewpress(){
    this.visable = ! this.visable;
    this.changetype=! this.changetype;
  }
  ishidden=false;
  @ViewChild('mylogin') form :NgForm;

 

  constructor(private router:Router,private services:ServicesService){}




  loginUserAccount(mylogin){


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
                  this.services.userloginsucessmessage=  [
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
  
  
}

