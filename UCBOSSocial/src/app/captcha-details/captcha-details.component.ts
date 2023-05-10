import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-captcha-details',
  templateUrl: './captcha-details.component.html',
  styleUrls: ['./captcha-details.component.css'],
  providers: [MessageService],
})
export class CaptchaDetailsComponent {
   //It is used for the captchaCode two way data binding.
  capthaCode:any;
  //It is used for the captchaCodeValue two way data binding.
  captchaCodeValue:any='';
  //It is used for the captha random value purpose
  chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  constructor(private router:Router , private messageService: MessageService){}
  ngOnInit(){
    this.generateCaptch();
  }

  //Submitting the captcha details.
  captchaDetailSubmitForm(){
    if(this.capthaCode==this.captchaCodeValue){
      this.router.navigate(['/homeScreen']);
      localStorage.setItem('captchaBooleanValue','true')
    }
    else{
      this.generateCaptch();
      this.captchaCodeValue=''
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: "captha is not matched",
      });
    }
  }

// generate the captha code
  generateCaptch(){
   let captcha='';
   for(let i=0;i<=6;i++){
   let index = Math.floor(Math.random()*this.chars.length)
   captcha = captcha+this.chars[index];
   this.capthaCode=captcha;
   }
  }

  //It is using the captha code refresh
  capthaRefreshValue(){
  this.generateCaptch();
  this.captchaCodeValue='';
  }
  
  // it is going to the login page
  backToLoginPage(){
    this.router.navigate(['/loginPage'])
  }
}
