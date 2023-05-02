import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captcha-details',
  templateUrl: './captcha-details.component.html',
  styleUrls: ['./captcha-details.component.css']
})
export class CaptchaDetailsComponent {
  //It is used for the captchaCodeValue two way data binding.
  captchaCodeValue:any='';
  constructor(private router:Router){}
  //Submitting the captcha details.
  captchaDetailSubmitForm(){
console.log(this.captchaCodeValue);
this.router.navigate(['/registerForm'])
  }
}
