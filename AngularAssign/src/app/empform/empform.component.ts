import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { Message } from 'primeng/api/message';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent {
  employeeId='';
  firstName='';
  lastName='';
  Gender='';
  Gender1='';
  Gender2='';
  dob:Date;
  emailId='';
  // phcode='91';
  PhoneNumber='';
  BloodGroup='';
  address='';
  Department='';
  dateOfJoining:Date;
  Salary='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm='';
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm;
  sucessmessagedata: Message[];
 


  constructor(private service:ServicesService,private router:Router ){}
  @ViewChild('EmployeeForm')myform:NgForm;

  ngOnInit(){
    this.employeeId=this.service.emplyeeid;

  
  }
  onSubmit(EmployeeForm:NgForm){
    this.service.addempdetails(EmployeeForm).subscribe();
    [
      {
        severity: 'success', 
        summary: 'Employee list', 
        detail:"form successfully added"
      }
    ]
   this.router.navigate(['/EMP']);
  }
  formcancelbtn(){
    this.firstName='';
    this.lastName='';
    this.Gender='';
    this.Gender1='';
    this.Gender2='';
    this.dob.setDate(null);
    this.emailId='';
    // this.phcode='';
    this.PhoneNumber='';
    this.BloodGroup='';
    this.address='';
    this.Department='';
    this.dateOfJoining.setDate(null);
    this.Salary='';
    this.shift='';
    this.createdSource='';
    this.createdSourceType='';
    this.createdDttm='';
    this.modifiedSource='';
    this.modifiedSourceType='';
    this.modifiedDttm='';
    
    }
    backtoemp(){
      this.router.navigate(['/EMP']);
    }
}
