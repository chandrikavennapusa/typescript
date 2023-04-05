import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { map } from 'rxjs';


import { ServicesService } from '../services.service';
import { response } from 'express';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  error:any;
  employeeId='';
  departmentid='';
  serchempidvalue='';
  attendenceempidhidden=false;
  addbtndisable=true;
  deleteviewmode=true;
  serachempview=false;
  errormessagedata;
  sucessmessagedata;
  successmessagedataEle=false;
  errormessagedataEle=false;
  gettingattendencedata:any=[];
  constructor(private service:ServicesService,private router:Router,private confirmationService: ConfirmationService){}
  cols;
  empdata;
  deptdata;
    ngOnInit(){

      this.cols = [
        { field: 'employeeId', header: 'Employee Id' },
        { field: 'month', header: 'Month' },
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
  

     this.service.gettingempdetails().subscribe(
      response=>
      this.empdata=(response)
     );
     
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






    
    addAttendece(){
        this.attendenceempidhidden=true;
    }

   
    empid;
    deptid;
    isboolean;
    empiddeptidcheck(){
     this. isboolean=false;
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
    this.errormessagedata=[
      {
           severity: 'error', 
            summary: 'Employee list', 
          detail:"the id is not alredy exist"
          }

] 
  this.successmessagedataEle=false;
    this.errormessagedataEle=true;
    this.attendenceempidhidden=false;
    this.employeeId='';
    this.departmentid='';
   
   }
   

   else if(this.empid && this.deptid){
      this.attendenceempidhidden=false;
      this.router.navigate(['/ATDELIST']);
      this.service.EmployeeId=this.employeeId;
      this.service.DepartmentId=this.departmentid;
     
     }
     else{
      this.errormessagedata=[
        {
             severity: 'error', 
              summary: 'Employee list', 
            detail:"the id is not alredy exist"
            }

] 
    this.successmessagedataEle=false;
      this.errormessagedataEle=true;
      this.attendenceempidhidden=false;
      this.employeeId='';
      this.departmentid='';
     
     }
     
    }



    cancelempiddeptid(){
      this.employeeId='';
      this.departmentid='';
  this.attendenceempidhidden=false;
    }

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
          
            this.sucessmessagedata=
            [
              {
                severity: 'success', 
                summary: 'Employee list', 
                detail:err.error.text
              }
            ]
            
               this.successmessagedataEle=true;
              this.errormessagedataEle=false;
            this.gettingData();
          },
          ()=>{
            console.log("complete");
            console.log("sucess block");
          }

      )
    }

  
    gettingData(){
      this.service.gettingAttendencedetails().subscribe(
        data => this.gettingattendencedata =data
       
      )
    }


   
    doubleClick(employeeId){

      this.service.attendenceemployeeid = employeeId;
      this.router.navigate(['/ATTDEFORM']);
      // this.service.setAttendencedata(rowData);
    
      }


      searching(){
        console.log(this.serchempidvalue);
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