import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  // It is used for the mobile number two way data binding.
  constructor(private router:Router){}
  mobileNumberValue:any='';
  // Submitting the loginpage details.
  loginPageSubmitFormDetails(){
    console.log(this.mobileNumberValue);
    this.router.navigate(['/captchaPage']);
  }
}
