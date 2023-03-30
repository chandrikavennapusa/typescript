import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-attendenceform',
  templateUrl: './attendenceform.component.html',
  styleUrls: ['./attendenceform.component.css']
})
export class AttendenceformComponent {
  constructor(private service:ServicesService , private router:Router){}
  employeeId='';
  month:Date;
  date:Date;
  departmentId='';
  Available='';
  Available1='';
  checkIn='';
  checkout='';
  attendanceCount='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm:Date;
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm:Date;

  editbtndisable=true;
  editmode=true;
  disablesavecancelbtn=false;
  disableeditbackbtn=true;

  onSubmit(AttendenceForm){
      this.service.updateattence(AttendenceForm).subscribe();
      this.editmode=true;
    this. disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
    this.router.navigate(['/ATDE']);
  }

  backtoatend(){
this.router.navigate(['/ATDE']);
  }
  ngOnInit(){
    let atddata= this.service.getAttendencedata();
    this.employeeId=atddata.employeeId;
    this.month=new Date(atddata.month);
    this.date= new Date(atddata.date);
    this.departmentId=atddata.departmentId;
    this.Available=atddata.available;
    this.Available1=atddata.available;
   this.checkIn=atddata.checkIn;
    this.checkout=atddata.checkout;
   this.attendanceCount=atddata.attendanceCount;
    this.shift=atddata.shift;
    this.createdSource=atddata.createdSource;
    this.createdSourceType=atddata.createdSourceType;
    this.createdDttm= new Date(atddata.createdDttm);
    this.modifiedSource=atddata.modifiedSource;
    this.modifiedSourceType=atddata.modifiedSourceType;
    this.modifiedDttm=new Date(atddata.modifiedDttm);
    let username =localStorage.getItem("username");
    if(username == "employee" ){
  
      this.editbtndisable=false;
  }
    
  }
  
   
 
  editattende(){
    this.editmode=false;
    this.disablesavecancelbtn=true;
    this.disableeditbackbtn=false;
  }

  cancelbtn(){
    this.editmode=true;
    this.disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
   }
}
