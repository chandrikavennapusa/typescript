import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  
  maxDate=new Date();
  disabledsubmitcancelbtn=false;
  disablededitbackbtn=true;
  editmode =false; 
  editbtndisable=true;
  fetchingdata;
  shift;
  shift19;
constructor(private service:ServicesService , private router:Router,private datepipe: DatePipe){
  this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ]
}

empdetailObj: EmpService = new EmpService();
// Intialization on the employee values
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
myDate ;
dateOfJoining11;
dob11;
createdDttm11
// Submission on the updated values
  onSubmit(){
    this.myDate = new Date(); 
    this.empdetailObj.dateOfJoining = this.datepipe.transform(this.dateOfJoining11,'medium');
    this.empdetailObj.dob= this.datepipe.transform(this.dob11,'medium');
    this.empdetailObj.createdDttm=this.datepipe.transform( this.createdDttm11,'medium')
      this.empdetailObj.shift=this.shift19.name;
    this.empdetailObj.modifiedSource=localStorage.getItem("username");
    this.empdetailObj.modifiedSourceType=localStorage.getItem("username");


   this.empdetailObj.modifiedDttm=this.datepipe.transform(this.myDate,'medium');
    this.service.updateempid(this.empdetailObj).subscribe();
    this.editmode=false;
    this.disabledsubmitcancelbtn=false;
    this.disablededitbackbtn=true;
    this.router.navigate(['/EMP']);
    console.log(this.empdetailObj)
  }
// Navigate to the Emplyoee list screen
  backtoemplistbtn(){
    this.router.navigate(['/EMP']);
  }
 
 ngOnInit(){
 console.log(this.service.employeeid)
 this.service.getempid(this.service.employeeid).subscribe(
        data =>{this.fetchingdata=data;
          console.log(this.fetchingdata)
  this.empdetailObj.employeeId=this.fetchingdata.employeeId;
  this.empdetailObj.firstName=this.fetchingdata.firstName;
  this.empdetailObj.lastName=this.fetchingdata.lastName;
  this.empdetailObj.gender=this.fetchingdata.gender;
  this.empdetailObj.gender=this.fetchingdata.gender;
  this.empdetailObj.gender=this.fetchingdata.gender;
  this.dob11=new Date(this.fetchingdata.dob);
  this.empdetailObj.phoneNumber=this.fetchingdata.phoneNumber;
  this.dateOfJoining11 = new Date(this.fetchingdata.dateOfJoining);
  this.empdetailObj.salary=this.fetchingdata.salary;
  this.shift19=this.fetchingdata.shift;
          this.dropdownshift();
  this.empdetailObj.createdSource=this.fetchingdata.createdSource;
  this.empdetailObj.createdSourceType=this.fetchingdata.createdSourceType;
   
  this.createdDttm11=new Date(this.fetchingdata.createdDttm)
  
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

  // Comparing the drop down values
dropdownshift(){
  if(this.shift19 == "Night"){
    this.shift=[{name:'Night'}]
  }else{
    this.shift=[{name:'Day'}]
  }
}

 // when we click Edit button, all the  input fields are enabled  
 editbtnviewmode(){
  this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ]
  this.editmode=true;
 
  this.disabledsubmitcancelbtn=true;
  this.disablededitbackbtn=false;
 }
  // when we click Cancel button, all the  input fields are disabled  
 cancelbtn(){
  this.editmode=false;
  this.disabledsubmitcancelbtn=false;
  this.disablededitbackbtn=true;
  this.ngOnInit();
 }
  
}



