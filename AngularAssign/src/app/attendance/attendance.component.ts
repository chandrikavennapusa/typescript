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
  attendenceempidhidden=false;

  gettingattendencedata;
  constructor(private service:ServicesService,private router:Router,private confirmationService: ConfirmationService){}
  
    ngOnInit(){
      
      this.service.gettingAttendencedetails().subscribe(
        data => this.gettingattendencedata =data
      )
      
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
        accept: () => this.service.deletebasedonempiddeptid(empid,deptid).subscribe(),
    });
    this.fetchData();
    }
  
    fetchData(){
      this.service.gettingempdetails().subscribe();
    }
   
    doubleClick(rowData){
      this.router.navigate(['/ATTDEFORM']);
      this.service.setAttendencedata(rowData);
      }
  }