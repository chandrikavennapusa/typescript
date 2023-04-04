import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';

@Component({
  selector: 'app-attendenceform',
  templateUrl: './attendenceform.component.html',
  styleUrls: ['./attendenceform.component.css']
})
export class AttendenceformComponent {
  constructor(private service:ServicesService , private router:Router){}
  

  editbtndisable=true;
  editmode=true;
  disablesavecancelbtn=false;
  disableeditbackbtn=true;

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

  onSubmit(){
    this.attendetailObj.modifiedSource="admin";
    this.attendetailObj.modifiedSourceType="admin";
    this.attendetailObj.modifiedDttm=new Date;
      this.service.updateattence(this.attendetailObj).subscribe();
      this.editmode=true;
    this.disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
    this.router.navigate(['/ATDE']);
  }

  backtoatend(){
this.router.navigate(['/ATDE']);
  }
  ngOnInit(){
    let atddata= this.service.getAttendencedata();
    console.log(atddata)
    this.attendetailObj.employeeId=atddata.employeeId;
    this.attendetailObj.month=new Date(atddata.month);
    this.attendetailObj.date= new Date(atddata.date);
    this.attendetailObj.departmentId=atddata.departmentId;
    this.attendetailObj.available=atddata.available;
    this.attendetailObj.available=atddata.available;
   this.attendetailObj.checkIn=atddata.checkIn;
    this.attendetailObj.checkout=atddata.checkout;
   this.attendetailObj.attendanceCount=atddata.attendanceCount;
    this.attendetailObj.shift=atddata.shift;
    this.attendetailObj.createdSource=atddata.createdSource;
    this.attendetailObj.createdSourceType=atddata.createdSourceType;
    this.attendetailObj.createdDttm= new Date(atddata.createdDttm);
    this.attendetailObj.modifiedSource=atddata.modifiedSource;
    this.attendetailObj.modifiedSourceType=atddata.modifiedSourceType;
    
    if(atddata.modifiedDttm == ''){
      this.attendetailObj.modifiedDttm='';
    }else{
      this.attendetailObj.modifiedDttm=new Date(atddata.modifiedDttm);
    }
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
