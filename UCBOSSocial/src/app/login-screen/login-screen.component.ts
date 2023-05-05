import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  // It is used for the mobile number two way data binding.
  mobileNumberValue:any='';
  constructor(private router:Router){}
  // Submitting the loginpage details.
  loginPageSubmitFormDetails(){
    this.router.navigate(['/captchaPage']);
  }
 // open to the Registration form
 openRegisterForm(){
  this.router.navigate(['/registerForm']);
 }
}
