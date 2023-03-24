import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  
  employeeId='';
  firstName='';
  lastName='';
  Gender='';
  Gender1='';
  Gender2='';
  dob='';
 emailId='';
  phcode='';
  PhoneNumber='';
  BloodGroup='';
  address='';
  Department='';
  dateOfJoining='';
  Salary='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm='';
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm='';
  rowdata1;
constructor(private service:ServicesService){}

  onSubmit(EmployeeForm:NgForm){
    console.log(EmployeeForm);
  }
  formcancelbtn(){
  }
 ngOnInit(){
  let rowdata1 = this.service.getData();
  this.employeeId=rowdata1.employeeId;
 }

  // this.service.getData().getValue
  
 
  
}



