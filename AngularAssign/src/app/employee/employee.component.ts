import { Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { table } from 'console';
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
  Gender1='';
  Gender2='';
  dob='';
 emailId='';
  phcode='91';
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
  empId='';

 empformhidden=false;
 tableformhidden=true;
 dialogempidform=false;


 successmessagedataEle=false;
 errormessagedataEle=false;
 gettingempdata;
 errorMessage;

 sucessmessagedata ;
 errormessagedata;
 constructor(private service:ServicesService,private router:Router){}

  onSubmit(EmployeeForm:NgForm){
    this.service.addempdetails(EmployeeForm).subscribe();
    this.empformhidden=false;
    this.tableformhidden=true;
    this.successmessagedataEle=true;
    this.errormessagedataEle=false;
    this.sucessmessagedata=
    [
      {
        severity: 'success', 
        summary: 'Employee list', 
        detail:"form successfully added"
      }
    ]
    location.reload();
  }
  empdDetailForm(){
    this.empformhidden=false;
    this.tableformhidden=false;
    this.dialogempidform=true;
     
   
      }

      
   isboolean;
      empidcheck(){
        this.isboolean=false;
        console.log(this.gettingempdata);

       this.gettingempdata.find((empdata)=> { 
          if(empdata.employeeId == this.empId){
            console.log("alredy exit that number");
            this.isboolean=true;
          } else{
            console.log("id is not their");
             }
        })

        if(this.isboolean == true){
          this.errormessagedata=[
                                              {
                                                    severity: 'error', 
                                                    summary: 'Employee list', 
                                                  detail:"the id is alredy exist"
                                                  }
            
                                 ] 
                                             this.successmessagedataEle=false;
                                                this.errormessagedataEle=true;


            this.empformhidden=false;
            this.tableformhidden=true;
           this.dialogempidform=false;

        }
        else{
          this.employeeId=this.empId;
          this.sucessmessagedata=
          [
            {
              severity: 'success', 
              summary: 'Employee list', 
              detail:"enter the table fields"
            }
          ]
          this.createdSource=this.service.createdSource;
          console.log(this.service.createdSource)
          this.successmessagedataEle=true;
          this.errormessagedataEle=false;
          this.empformhidden=true;
          this.tableformhidden=false;
          this.dialogempidform=false;
        }
        this.empId='';
      }
     
      

  ngOnInit(){
    this.createdSource=this.service.createdSource;
    console.log(this.createdSource);
    
   this.service.gettingempdetails().subscribe(
      data=> this.gettingempdata=data,
      error => this.errorMessage = error
    );
  }

  cancelempidbtn(){
    this.empId='';
    this.dialogempidform=false;
    this.empformhidden=false;
    this.tableformhidden=true;
  }

  formcancelbtn(){
  this.employeeId='';
  this.firstName='';
  this.lastName='';
  this.Gender='';
  this.Gender1='';
  this.Gender2='';
  this.dob='';
  this.emailId='';
  this.phcode='';
  this.PhoneNumber='';
  this.BloodGroup='';
  this.address='';
  this.Department='';
  this.dateOfJoining='';
  this.Salary='';
  this.shift='';
  this.createdSource='';
  this.createdSourceType='';
  this.createdDttm='';
  this.modifiedSource='';
  this.modifiedSourceType='';
  this.modifiedDttm='';
  this.tableformhidden=true;
  this.empformhidden=false;
  }



  deletebasedonempid(id){
    let isdelete= confirm('Are you sure?');

    if(isdelete){
    this.service.deleteempid(id).subscribe();
    }
    location.reload();
  }

  doubleClick(rowdata){
    console.log(this.gettingempdata.length);
    console.log(rowdata);
    this.service.setData(rowdata);
    this.router.navigate(['/EMPLIST']);
  }
 
}

