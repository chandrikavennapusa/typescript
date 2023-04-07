import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { map } from 'rxjs';


import { ServicesService } from '../services.service';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [MessageService]
})
export class AttendanceComponent {
  
  employeeId='';
  departmentid='';
  serchempidvalue='';
  
  addbtndisable=true;
  deleteviewmode=true;
  serachempview=false;

  gettingattendencedata:any=[];
@ViewChild('deptidEmpidForm')form:NgForm;
  constructor(private service:ServicesService,private router:Router,private confirmationService: ConfirmationService,
    private messageService: MessageService ){}

  cols:any;
  empdata;
  deptdata;
  empid:boolean;
  deptid:boolean;
  isboolean;
  visible: boolean;

showDialog() {
    this.visible = true;
}
    ngOnInit(){
      this.cols = [
        { field: 'employeeId', header: 'Employee Id' },
        { field: 'date', header: 'Date' },
        { field: 'departmentId', header: 'Department Id' },
        { field: 'available', header: 'Available' },
        { field: 'checkIn', header: 'Check In' },
        { field: 'checkout', header: 'Check Out' },
        { field: 'attendanceCount', header: 'Attendance Count' },
        { field: 'shift', header: 'Shift' },
        { field: 'createdSource', header: 'CreatedSource' },
        { field: 'createdSourceType', header: 'CreatedSourceType' },
        { field: 'createdDttm', header: 'CreatedDttm' },
        { field: 'modifiedSource', header: 'ModifiedSource' },
        { field: 'modifiedSourceType', header: 'ModifiedSourceType' },
        { field: 'modifiedDttm', header: 'ModifiedDttm' },
    ];
  
      // fecthing the Employee Data
     this.service.gettingempdetails().subscribe(
      response=>
      this.empdata=(response)
     );
     // fecting the department Data
     this.service.gettingDeptdata().subscribe(
      data=>this.deptdata=data
     );
        
      this.gettingData();
      let username =localStorage.getItem("username");
      if(username == "employee" ){
        this.addbtndisable=false;
       this.deleteviewmode=false;
       this.serachempview=true;
   }
      
    }

   //  To check Emplyoee Id and Department Id
  
    empiddeptidcheck(){
     this.isboolean=false;
  for(let d of this.empdata){
    if(d.employeeId ==this.employeeId){
      this.empid = true;
    }
  }
   for(let de of this.deptdata){
    console.log(de.departmentId)
    if(de.departmentId ==this.departmentid){ 
      this.deptid= true;
    }
    this.gettingattendencedata.find((empdeptdata)=>{
      if(empdeptdata.employeeId == this.employeeId){
        this.isboolean=true;
      }
    }
    )
   }

   if(this.isboolean == true){
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'the Employee id is already exit' });
    this.employeeId='';
    this.departmentid='';
   
   }
   else if(this.empid && this.deptid){

      this.router.navigate(['/ATDELIST']);
      this.service.EmployeeId=this.employeeId;
      this.service.DepartmentId=this.departmentid;
      
     }
     else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: ' Id is not match' });   
      this.employeeId='';
      this.departmentid='';
     

     }
     this.visible = false;
     this.form.reset();
    }
 
      //  Clears the data in employee and department id
    cancelempiddeptid(){
      this.employeeId='';
      this.departmentid=''
      this.visible = false;
      this.form.reset();
    }
      // Delete the data based on Employee Id and Department Id

    deletebasedonempiddeptid(empid,deptid){
      this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        accept: () =>{this.deleteempiddepid(empid,deptid)}
    });
    this.gettingData();
    }
    deleteempiddepid(empid,deptid){
      this.service.deletebasedonempiddeptid(empid,deptid).subscribe(
        response=>{ console.log(response);
          console.log("response block");
          } ,

          (err:HttpErrorResponse) =>{

            this.messageService.add({ severity: 'success', summary: 'Success', detail: err.error.text });
            this.gettingData();
          },
          ()=>{
            console.log("complete");
            console.log("sucess block");
          }

      )
    }

   // Fecthing the Attendence Data
    gettingData(){
      this.service.gettingAttendencedetails().subscribe(
        data => this.gettingattendencedata =data,
        err => { 
          this.messageService.add({ severity: 'success', summary: 'Success', detail: err.error.text });
        },
        ()=>{
            console.log("completed")
        }
       
      )
    }


   // when we double click on this, we will get row 
    doubleClick(employeeId){
      this.service.attendenceemployeeid = employeeId;
      this.router.navigate(['/ATTDEFORM']);
      }

   //  Searching based on Emplyoee Id
      searching(){
        if(this.serchempidvalue==''){
          this.service.gettingAttendencedetails().subscribe(
        data => this.gettingattendencedata =data
     )
         }else{
      this.service.gettingattendedatabasedonempid(this.serchempidvalue).subscribe(
        response =>{
          this.gettingattendencedata=[];
         this.gettingattendencedata.push(response);
          console.log(this.gettingattendencedata)
          
        },
        (err:HttpErrorResponse)=>{
          this.gettingattendencedata=[];     
        },
        () => {
       console.log("completed");
        });

         }
      }
  }