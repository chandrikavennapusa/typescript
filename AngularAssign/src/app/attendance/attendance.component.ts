import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';


import { ServicesService } from '../services.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  
  employeeId='';
  departmentid='';
  serchempidvalue='';
  attendenceempidhidden=false;
  addbtndisable=true;
  deleteviewmode=true;
  gettingattendencedata:any=[];
  constructor(private service:ServicesService,private router:Router,private confirmationService: ConfirmationService){}
  
    ngOnInit(){
      
      this.gettingData();
      let username =localStorage.getItem("username");
      if(username == "employee" ){
        this.addbtndisable=false;
       this.deleteviewmode=false;
   }
      
    }
    
    addAttendece(){
        this.attendenceempidhidden=true;
    }

    isboolean;
    empiddeptidcheck(){
      this.isboolean=false;
     this.gettingattendencedata.find((empdeptdata)=>{
      if(empdeptdata.employeeId == this.employeeId && empdeptdata.departmentId== this.departmentid){
        this.isboolean=true;
      }
     })
     if(this.isboolean == true){
      this.attendenceempidhidden=false;
      this.employeeId='';
      this.departmentid='';
     }
     else{

      this.attendenceempidhidden=false;
      this.router.navigate(['/ATDELIST']);
      this.service.EmployeeId=this.employeeId;
      this.service.DepartmentId=this.departmentid;
     }
     
    }



    cancelempiddeptid(){
      this.employeeId='';
      this.departmentid='';
  this.attendenceempidhidden=false;
    }

    deletebasedonempiddeptid(empid,deptid){

      this.confirmationService.confirm({
        message: 'Row Delete Congormation Box.',
        header: 'Employee Row',
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
            console.log(err.error)
            console.log("error block");
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
   
    doubleClick(rowData){
      this.router.navigate(['/ATTDEFORM']);
      this.service.setAttendencedata(rowData);
      }
      searching(){
        console.log(this.serchempidvalue);
      this.service.gettingattendedatabasedonempid(this.serchempidvalue).subscribe(
        response =>{
          this.gettingattendencedata= response;
          console.log(this.gettingattendencedata)
          console.log(response);
          console.log("data is cominf")
        },
        (err:HttpErrorResponse)=>{
         console.log(err.error)
        },
        () => {
       console.log("completed");
        });

      
      }
  }