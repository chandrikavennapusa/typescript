import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServicesService } from '../apiservices.service';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  providers: [MessageService],
})
export class LoginScreenComponent {
  // It is used for the mobile number two way data binding.
  mobileNumberValue:any='';

  constructor(private router:Router ,private apiService:APIServicesService,private messageService: MessageService ){}
  
  // Submitting the loginpage details.
  loginPageSubmitFormDetails(loginPageDetails:NgForm){
 this.apiService.checkMobileNumberExistOrNot(loginPageDetails.value).subscribe(
  (data:any)=>{
    localStorage.setItem('loginBooleanValue','true');
    this.router.navigate(['/captchaPage']);
  },
  (err:any)=>{
    this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.errorMessage});
  },
  ()=>{
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'mobile number login sucessfully'});
  }
 )  
  }

 // open to the Registration form
  openRegisterForm(){
  this.router.navigate(['/registerForm']);
 }
}






