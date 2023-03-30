import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { map } from 'rxjs';


import { ServicesService } from '../services.service';

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
  gettingattendencedata:any=[];
  constructor(private service:ServicesService,private router:Router,private confirmationService: ConfirmationService){}

  
    ngOnInit(){
     
     
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
          // this.gettingattendencedata.push(err.error);
           this.error=err.error;
         console.log(err.error);
         console.log(this.gettingattendencedata)
        },
        () => {
       console.log("completed");
        });

         }
      }
  }