import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  
 
  rowdata1;

  disabledsubmitcancelbtn=false;
  disablededitbackbtn=true;
  editmode =false; 
  editbtndisable=true;
  fetchingdata;
constructor(private service:ServicesService , private router:Router){}

empdetailObj: EmpService = new EmpService();

empdetailsintialization(){
 this.empdetailObj={
  employeeId:'',
  firstName:'',
  lastName:'',
  gender:'',
  dob:'',
  emailId:'',
  phoneNumber:'',
  BloodGroup:'',
  address:'',
  Department:'',
  dateOfJoining:'',
  salary:'',
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


    this.empdetailObj.modifiedSource="admin";
    this.empdetailObj.modifiedSourceType="admin";
    this.empdetailObj.modifiedDttm= new Date();
    this.service.updateempid(this.empdetailObj).subscribe();
    
    this.editmode=false;
    this.disabledsubmitcancelbtn=false;
    this.disablededitbackbtn=true;
    this.router.navigate(['/EMP']);
    
  }

  backtoemplistbtn(){
    this.router.navigate(['/EMP']);
  }
 ngOnInit(){
//  this.service.employeeid;
 console.log(this.service.employeeid)
 this.service.getempid(this.service.employeeid).subscribe(
        data =>{this.fetchingdata=data;
          this.empdetailObj.employeeId=this.fetchingdata.employeeId;
  this.empdetailObj.firstName=this.fetchingdata.firstName;
  this.empdetailObj.lastName=this.fetchingdata.lastName;
  this.empdetailObj.gender=this.fetchingdata.gender;
  this.empdetailObj.gender=this.fetchingdata.gender;
  this.empdetailObj.gender=this.fetchingdata.gender;
  let dOfb=new Date(this.fetchingdata.dob);
  this.empdetailObj.dob=dOfb;

  this.empdetailObj.phoneNumber=this.fetchingdata.phoneNumber;
  let doj = new Date(this.fetchingdata.dateOfJoining);
  this.empdetailObj.dateOfJoining=doj;
  this.empdetailObj.salary=this.fetchingdata.salary;
  this.empdetailObj.shift=this.fetchingdata.shift;
  this.empdetailObj.createdSource=this.fetchingdata.createdSource;
  this.empdetailObj.createdSourceType=this.fetchingdata.createdSourceType;
  let Cd = new Date(this.fetchingdata.createdDttm)
  this.empdetailObj.createdDttm=Cd;
  
  this.empdetailObj.modifiedSource=this.fetchingdata.modifiedSource
  this.empdetailObj.modifiedSourceType=this.fetchingdata.modifiedSourceType;
  if( this.fetchingdata.modifiedDttm == ''){
    this.empdetailObj.modifiedDttm='';
  }else{
    this.empdetailObj.modifiedDttm=new Date (this.fetchingdata.modifiedDttm);
  }
   
        }
  );

 

  let username =localStorage.getItem("username");
  if(username == "employee" ){

    this.editbtndisable=false;
}

 }
 editbtnviewmode(){
  this.editmode=true;
  
  this.disabledsubmitcancelbtn=true;
  this.disablededitbackbtn=false;
 }
 cancelbtn(){
  this.editmode=false;
  this.disabledsubmitcancelbtn=false;
  this.disablededitbackbtn=true;
 }
  
}



