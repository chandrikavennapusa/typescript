import { Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  value='';
  employeeId='';
  firstName='';
  lastName='';
  Gender='';
  Gender1:'';
  Gender2:'';
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

 empformhidden=true;
 tableformhidden=false;

 constructor(private service:ServicesService){}

  onSubmit(EmployeeForm:NgForm){
    this.service.addempdetails(EmployeeForm).subscribe();
    console.log(EmployeeForm.value);
  }
  empdDetailForm(){
    this.empformhidden=false;
    this.tableformhidden=true;
      }
      gettingempdata;
      errorMessage;
  ngOnInit(){
    this.service.gettingempdetails().subscribe(
      data=> this.gettingempdata=data,
      error => this.errorMessage = error
    );
  }

}

