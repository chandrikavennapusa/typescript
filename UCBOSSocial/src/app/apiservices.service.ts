import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServicesService {


  constructor(private httpclient:HttpClient) { }
// add the registartionform details
 addingRegisterFormDetails(registerForm){
  return this.httpclient.post('http://localhost:8080/user/register',registerForm);
 }

 // checking the mobile number
 checkMobileNumberExistOrNot(loginPageDetails){
  return this.httpclient.post('http://localhost:8080/user/login',loginPageDetails);
 }


}
