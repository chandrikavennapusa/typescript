import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { table } from 'console';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { ServicesService } from '../services.service';





@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]
})
export class EmployeeComponent {
  gettingempdata;
  errorMessage: any;
  empId: string;
  cols;
  isboolean;


@ViewChild('EmpidForm')form:NgForm;
  addbtndisable=true;
  deleteviewmode=true;
  errormessagedata: Message[];
  sucessmessagedata: Message[];
  visible: boolean;
  empidsucessmessagedata: Message[];

  showDialog() {
      this.visible = true;
  }
  constructor(private service:ServicesService,private router:Router ,private confirmationService: ConfirmationService,
    private messageService: MessageService){}

// when we double click on this, we will get row 
   doubleClick(employeeId){
    this.service.employeeid=employeeId;
    console.log(employeeId)
    this.router.navigate(['/EMPLIST']);
  }

  ngOnInit(){
    this.gettingData();

    this.cols = [
      { field: 'employeeId', header: 'Employee Id' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'dob', header: 'Date Of Birth' },
      { field: 'gender', header: 'Gender' },
      { field: 'phoneNumber', header: 'Phone Number' },
      { field: 'dateOfJoining', header: 'Date Of Joining' },
      { field: 'salary', header: 'Salary' },
      { field: 'shift', header: 'Shift' },
      { field: 'createdSource', header: 'CreatedSource' },
      { field: 'createdSourceType', header: 'CreatedSourceType' },
      { field: 'createdDttm', header: 'CreatedDttm' },
      { field: 'modifiedSource', header: 'ModifiedSource' },
      { field: 'modifiedSourceType', header: 'ModifiedSourceType' },
      { field: 'modifiedDttm', header: 'ModifiedDttm' },
      
  ];
  
    let username =localStorage.getItem("username");
    if(username == "employee" ){
      this.addbtndisable=false;
     this.deleteviewmode=false;
 }
 
  
   }

// Delete the data based on Employee Id
  deletebasedonempid(id){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
      accept: () =>{
        this.delete(id)
      } 
  });
   
  }
  delete(id){

  this.service.gettingattendedatabasedonempid(id).subscribe(
    (data)=> {
              console.log(data);
    }
  )

        this.service.deleteempid(id).subscribe( 
          response=>{ console.log(response);
          console.log("response block");
          } ,
          (err:HttpErrorResponse) =>{
            this.messageService.add({ severity: 'success', summary: 'Success', detail: err.error.text});
            this.gettingData();
          },
          ()=>{
            console.log("complete");
            console.log("sucess block");
          }
        );
  }

// Feching the Employee data
  gettingData(){
    this.service.gettingempdetails().subscribe(
    data=> this.gettingempdata=data
    ,
    error => this.errorMessage = error,
  );
   }

  // To check Emplyoee Id 
      empidcheck(){
        this.isboolean=false;
       this.gettingempdata.find((empdata)=> { 
          if(empdata.employeeId == this.empId){
            this.isboolean=true;
          } 
        })
        if(this.isboolean == true){
          this.messageService.add({ severity: 'error', summary: 'Employee List', detail: 'Employee Id is already exit' });  
                        
        }
        else{
          this.empidsucessmessagedata=
          [
            {
              severity: 'success', 
              summary: 'Employee list', 
              detail:"enter the table fields"
            }
          ]
        
            this.router.navigate(['/EMPFORM']);
            this.service.emplyeeid=this.empId;
         
        }
        this.empId='';
       this.form.reset();
       this.visible = false;
      }

//  when we click Cancel button , Employee id data will be cleared
      cancelempidbtn(){
        this.empId='';
        this.visible = false;
      }
    
     

}



