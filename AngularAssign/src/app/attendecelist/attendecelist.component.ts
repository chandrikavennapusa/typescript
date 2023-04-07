import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendecelist',
  templateUrl: './attendecelist.component.html',
  styleUrls: ['./attendecelist.component.css']
})
export class AttendecelistComponent {
  maxDate=new Date(); 
shift;
shift11;
constructor(private service:ServicesService,private router:Router,private datepipe: DatePipe){
  this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ]
  }
  ngOnInit(){
  
    this.attendetailsintialization();
      this.attendetailObj.employeeId=this.service.EmployeeId;
      this.attendetailObj.departmentId=this.service.DepartmentId;
  }
  attendetailObj: AttenService= new AttenService();
 // Intialization the Attendence Values
  attendetailsintialization(){
    this.attendetailObj={
 employeeId:'',

  date:'',
  departmentId:'',
  available:'',
  available1:'',
  checkIn:'',
  checkout:'',
  attendanceCount:'',
  shift:'',
  createdSource:'',
  createdSourceType:'',
  createdDttm:'',
  modifiedSource:'',
  modifiedSourceType:'',
  modifiedDttm:''
    }

  }

month11;
date11;

// Attendence Form submission
  onsubmit(){

    this.attendetailObj.date=this.datepipe.transform(this.date11,'shortDate')
    this.attendetailObj.createdSource=localStorage.getItem("username");
    this.attendetailObj.createdSourceType=localStorage.getItem("username");
    this.attendetailObj.createdDttm=this.datepipe.transform(new Date(),'medium') 
    this.attendetailObj.shift=this.shift11.name;
    this.service.addattendencedata(this.attendetailObj).subscribe();
    this.router.navigate(['/ATDE']);
    console.log(this.attendetailObj)

  }


 // Navigate to the Attendece list Screen
  gobackatten(){
    this.router.navigate(['/ATDE'])
  }

}
