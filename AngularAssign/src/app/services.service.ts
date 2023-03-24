import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpclient:HttpClient) { }

  createdSource='';
  createdSourceType='';
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
   
    deleteempid(id){
      const params = new HttpParams().set('employeeId',id);
 return this.httpclient.delete('http://localhost:9091/employeedetail/deletebyempid',{params:params});
    }

      rowdata;
    setData(rowdata){
      this.rowdata =rowdata;
      console.log(this.rowdata);
    }
    getData(){
      return this.rowdata;
    }

    
}
