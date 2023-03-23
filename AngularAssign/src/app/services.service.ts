import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }

 usercheck(mylogin){
  const params = new HttpParams().set('Username',mylogin.value.UserName).set('password',mylogin.value.password)

  return this.httpclient.get('http://localhost:9091/userAccount/checkuserexists',{params:params});
  
 }
 
  addempdetails(EmployeeForm){

   return this.httpclient.post('http://localhost:9091/employeedetail/addemployee',EmployeeForm.value);
  }

   gettingempdetails(){
    return this.httpclient.get('http://localhost:9091/employeedetail/findallemployees');
   }
    
}
