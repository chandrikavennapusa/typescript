import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIServicesService } from '../apiservices.service';
import { RegisterfieldsService } from '../registerfields.service';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  providers: [MessageService]
})
export class RegisterFormComponent {
 // It is used to date of birth two way data binding.
  dateOfBirthValue='';
 // Setting the maximum date.
  maxDate=new Date();
  // gender Field validation
    genderValidation=true;
  //It is used to registartion details purpose.
    registrationDetailObjects:RegisterfieldsService  = new RegisterfieldsService();

  constructor(private router:Router , private apiService:APIServicesService , private datepipe: DatePipe,private messageService: MessageService){}

 //Intialization of registartion details
 registrationDetailsIntialization() {
  this.registrationDetailObjects = {
    firstName:'',
    lastName:'',
    mobileNumber:'',
    dateOfBirth:'',
    gender:'',
    username:''
  };
 }

  // Submitting The register form
  registerFormSubmitDetails(){
    this.registrationDetailObjects.dateOfBirth = this.datepipe.transform( this.dateOfBirthValue,'dd/MM/yyyy' );
      this.apiService.addingRegisterFormDetails(this.registrationDetailObjects).subscribe(
        (data)=>{console.log(data)},
        (err)=>{this.messageService.add({ severity: 'error', summary: 'Error message', detail: err.error.errorMessage});},
        ()=>{ this.messageService.add({ severity: 'success', summary: 'Success', detail: 'registration is sucessfully completed' });}
      )
   this.router.navigate(['/loginPage'])
  }

  // it is going to the login page
  backToLoginPage(){
    this.router.navigate(['/loginPage'])
  }

  //
  navigateLoginPage(){
    
  }
  
}
