import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  dob:Date;
  emailId='';
  phcode='';
  PhoneNumber='';
  BloodGroup='';
  address='';
  Department='';
  dateOfJoining:Date;
  Salary='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm1:Date;
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm='';
  rowdata1;

  disabledsubmitcancelbtn=false;
  disablededitbackbtn=true;
  editmode =false; 
  editbtndisable=true;
constructor(private service:ServicesService , private router:Router){}

  onSubmit(EmployeeForm:NgForm){
    console.log(EmployeeForm)
    this.service.updateempid(EmployeeForm).subscribe();
    this.editmode=false;
    this.disabledsubmitcancelbtn=false;
    this.disablededitbackbtn=true;
    
  }

  backtoemplistbtn(){
    this.router.navigate(['/EMP']);
  }
 ngOnInit(){
  
  let rowdata1 = this.service.getData();
  this.employeeId=rowdata1.employeeId;
  this.firstName=rowdata1.firstName;
  this.lastName=rowdata1.lastName;
  this.Gender=rowdata1.gender;
  this.Gender1=rowdata1.gender;
  this.Gender2=rowdata1.gender;
  let dOfb=new Date(rowdata1.dob);
  this.dob=dOfb;
  this.phcode=rowdata1.phcode;
  this.PhoneNumber=rowdata1.phoneNumber;
  let doj = new Date(rowdata1.dateOfJoining);
  this.dateOfJoining=doj;
  this.Salary=rowdata1.salary;
  this.shift=rowdata1.shift;
  this.createdSource=rowdata1.createdSource;
  this.createdSourceType=rowdata1.createdSourceType;
  let Cd = new Date(rowdata1.createdDttm)
  this.createdDttm1=Cd;
  
  this.modifiedSource=rowdata1.modifiedSource
  this.modifiedSourceType=rowdata1.modifiedSourceType
  this.modifiedDttm=rowdata1.modifiedDttm;

  let username =localStorage.getItem("username");
  if(username == "employee" ){

    this.editbtndisable=false;
}

 }





 editbtnviewmode(){
  this.editmode=true;
  this.disabledsubmitcancelbtn=true;
  this.disablededitbackbtn=false;
 }
 cancelbtn(){
  this.editmode=false;
  this.disabledsubmitcancelbtn=false;
  this.disablededitbackbtn=true;
 }
  
}



