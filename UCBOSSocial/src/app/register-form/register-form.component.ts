import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  // It is used for the frist name two way data binding.
  firstNameValue:any='';
  // It is used for the last name two way data binding.
  lastNameValue:any='';
  // It is used for the  MobileNumber two way data binding.
  MobileNumberValue:any='';
  // It is used for the  dateOfBirth two way data binding.
  dateOfBirthValue:any;
   // It is used for the  gender two way data binding.
  genderValue:any='';
  //It is used for the  gender two way data binding.
  userNameValue:any='';
 // Setting the maximum date.
  maxDate=new Date();
  constructor(private router:Router){}
  // Submitting The register form
  registerFormSubmitDetails(){
this.router.navigate(['/loginPage'])
  }
  // it is going to the login page
  backToLoginPage(){
    this.router.navigate(['/loginPage'])
  }
  
}
