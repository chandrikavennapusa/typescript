import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';

@Component({
  selector: 'app-attendecelist',
  templateUrl: './attendecelist.component.html',
  styleUrls: ['./attendecelist.component.css']
})
export class AttendecelistComponent {
  
shift;
constructor(private service:ServicesService,private router:Router){
  this.shift=[
    {name:'day'},
    {name:'night'}
   ]
  }
  ngOnInit(){
    this.attendetailsintialization();
     this.attendetailObj.employeeId=this.service.EmployeeId;
      this.attendetailObj.departmentId=this.service.DepartmentId;
  }
  attendetailObj: AttenService= new AttenService();

  attendetailsintialization(){
    this.attendetailObj={
 employeeId:'',
  month:'',
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
 

  onsubmit(){
    
    this.attendetailObj.createdSource=localStorage.getItem("username");
    this.attendetailObj.createdSourceType=localStorage.getItem("username");
    this.attendetailObj.createdDttm= new Date;

    this.service.addattendencedata(this.attendetailObj).subscribe();
    this.router.navigate(['/ATDE']);
    console.log(this.attendetailObj)

  }


 
  gobackatten(){
    this.router.navigate(['/ATDE'])
  }
}
