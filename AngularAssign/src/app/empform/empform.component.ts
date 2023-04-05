import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { Message } from 'primeng/api/message';

import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';

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
  constructor(private service:ServicesService,private router:Router){
   this.bloodGroup =[
    {name:'A'},
    {name:'A+'},
    {name:'B'},
    {name:'B+'},
    {
      name:'AB'
    }
   ];
   this.shift=[
    {name:'day',code:'day'},
    {name:'night',code:'day'}
   ]
  }


  empdetailObj: EmpService = new EmpService();

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
   
    this.sucessmessagedata=this.service.empidsucessmessagedata;
    this.empdetailsintialization();
    this.empdetailObj.employeeId=this.service.emplyeeid;
  }

 shift19;
 bloddgroup1;
  onSubmit(){
    console.log(this.empdetailObj);

    this.empdetailObj.BloodGroup=this.bloddgroup1.name;
    this.empdetailObj.shift=this.shift19.name;


    this.empdetailObj.createdSource=localStorage.getItem('username');
    this.empdetailObj.createdSourceType=localStorage.getItem('username');;
    this.empdetailObj.createdDttm= new Date();
    console.log(this.shift19);

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
