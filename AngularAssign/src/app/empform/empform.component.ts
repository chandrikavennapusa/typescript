import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { Message } from 'primeng/api/message';

import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent {
  
  sucessmessagedata: Message[];
 
  maxDate=new Date();
bloodGroup:any;
shift:any;
shift19;
bloddgroup1;
myDate;
  constructor(private service:ServicesService,private router:Router,private datepipe: DatePipe){
   this.bloodGroup =[
    {name:'A'},
    {name:'A+'},
    {name:'B'},
    {name:'B+'},
    { name:'AB'}
      ];

   this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ]
  }


empdetailObj: EmpService = new EmpService();
// Intialization the Employee Values
empdetailsintialization(){
 this.empdetailObj={
  employeeId:'',
  firstName:'',
  lastName:'',
  gender:'',
  dob:'',
  emailId:'',
  phoneNumber:'',
  BloodGroup:'',
  address:'',
  Department:'',
  dateOfJoining:'',
  salary:'',
  shift:'',
  createdSource:'',
  createdSourceType:'',
  createdDttm:'',
  modifiedSource:'',
  modifiedSourceType:'',
  modifiedDttm:''
 }
}

  ngOnInit(){
    this.empdetailsintialization();
    this.empdetailObj.employeeId=this.service.emplyeeid;
  }

//  Employee form submission
  onSubmit(){
    this.myDate = new Date(); 
    this.empdetailObj.dob=this.datepipe.transform(this.myDate,'medium');
    this.empdetailObj.dateOfJoining=this.datepipe.transform(this.myDate,'medium');
    this.empdetailObj.BloodGroup=this.bloddgroup1.name;
    this.empdetailObj.shift=this.shift19.code;

    this.empdetailObj.createdSource=localStorage.getItem('username');
    this.empdetailObj.createdSourceType=localStorage.getItem('username');
    
    this.empdetailObj.createdDttm=this.datepipe.transform(this.myDate,'medium');
   
    this.service.addempdetails(this.empdetailObj).subscribe();
    [
      {
        severity: 'success', 
        summary: 'Employee list', 
        detail:"form successfully added"
      }
    ]
   this.router.navigate(['/EMP']);
  }

// Clear the all input fileds and Navigate to Employee list Screen
  formcancelbtn(){
    this.empdetailObj.firstName='';
    this.empdetailObj.lastName='';
    this.empdetailObj.dob='';
    this.empdetailObj.emailId='';
    this.empdetailObj.phoneNumber='';
    this.empdetailObj.BloodGroup='';
    this.empdetailObj.address='';
    this.empdetailObj.Department='';
    this.empdetailObj.dateOfJoining='';
    this.empdetailObj.salary='';
    this.empdetailObj.shift='';
    this.empdetailObj.createdSource='';
    this.empdetailObj.createdSourceType='';
    this.empdetailObj.createdDttm='';
    this.empdetailObj.modifiedSource='';
    this.empdetailObj.modifiedSourceType='';
    this.empdetailObj.modifiedDttm='';    
    this.router.navigate(['/EMP']);
    }
    
}
