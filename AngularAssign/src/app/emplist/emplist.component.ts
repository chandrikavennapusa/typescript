import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  disabledSubmitCancelButton=false;
  disabledEditBackButton=true;
  editmode =false; 
  editButtonDisable=true;
  fetchingEmployeeData:any;
  shift:any;
  shift19:any;
  myDate:Date ;
  dateOfJoining11:any;
  dob11:any;
  createdDttm11:any;
  bloodGroup:any;
  bloodgroup1:any;
constructor(private service:ServicesService , private router:Router,private datepipe: DatePipe ,
  private activatedRoute: ActivatedRoute){
  this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ]
   this.bloodGroup =[
    {name:'A',code:'a'},
    {name:'A+', code:'a+'},
    {name:'B',code:'b'},
    {name:'B+',code:'b+'},
    { name:'AB',code:'ab'}
      ]
}

employeeDetailObj: EmpService = new EmpService();
// Intialization on the employee values
employeeDetailsIntialization(){
 this.employeeDetailObj={
  employeeId:'',
  firstName:'',
  lastName:'',
  gender:'',
  dob:'',
  mailId:'',
  phoneNumber:'',
  bloodGroup:'',
  address:'',
  department:'',
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

// Submission on the updated values
  onSubmit(){
    this.myDate = new Date(); 
    this.employeeDetailObj.dateOfJoining = this.datepipe.transform(this.dateOfJoining11,'M/d/yy,  h:mm:ss a');
    this.employeeDetailObj.dob= this.datepipe.transform(this.dob11,'M/d/yy,  h:mm:ss a');
    this.employeeDetailObj.createdDttm=this.datepipe.transform( this.createdDttm11,'M/d/yy,  h:mm:ss a');
    this.employeeDetailObj.bloodGroup=this.bloodgroup1.code;
    this.employeeDetailObj.shift=this.shift19.code;
    this.employeeDetailObj.modifiedSource=localStorage.getItem("username");
    this.employeeDetailObj.modifiedSourceType=localStorage.getItem("username");
    this.employeeDetailObj.modifiedDttm=this.datepipe.transform(this.myDate,'M/d/yy,  h:mm:ss a');
    this.service.updateEmployeeDeatils(this.employeeDetailObj).subscribe();
    this.editmode=false;
    this.disabledSubmitCancelButton=false;
    this.disabledEditBackButton=true;
    this.router.navigate(['/EMP']);
  }
 
 ngOnInit(){
        this.activatedRoute.paramMap.subscribe((parm) => {
        this.service.employeeid = parm.get('id')?.substring(1); 
        this.service.fetchingEmployeeIdDetails(this.service.employeeid).subscribe((results: any) => {
        this.fetchingEmployeeData=results;
        this.employeeDetailObj.employeeId=this.fetchingEmployeeData.employeeId;
        this.employeeDetailObj.firstName=this.fetchingEmployeeData.firstName;
        this.employeeDetailObj.lastName=this.fetchingEmployeeData.lastName;
        this.employeeDetailObj.gender=this.fetchingEmployeeData.gender;
        this.employeeDetailObj.gender=this.fetchingEmployeeData.gender;
        this.employeeDetailObj.gender=this.fetchingEmployeeData.gender;
        this.dob11=new Date(this.fetchingEmployeeData.dob);
        this.employeeDetailObj.mailId=this.fetchingEmployeeData.mailId;
        this.employeeDetailObj.phoneNumber=this.fetchingEmployeeData.phoneNumber;
        this.dateOfJoining11 = new Date(this.fetchingEmployeeData.dateOfJoining);
        this.bloodgroup1=this.fetchingEmployeeData.bloodGroup;
        this.bloodGroupValue();
        this.employeeDetailObj.salary=this.fetchingEmployeeData.salary;
        this.shift19=this.fetchingEmployeeData.shift;
        this.dropdownShiftValues();
        this.employeeDetailObj.address=this.fetchingEmployeeData.address;
        this.employeeDetailObj.department=this.fetchingEmployeeData.department;
        this.employeeDetailObj.createdSource=this.fetchingEmployeeData.createdSource;
        this.employeeDetailObj.createdSourceType=this.fetchingEmployeeData.createdSourceType;
        this.createdDttm11=new Date(this.fetchingEmployeeData.createdDttm)
        this.employeeDetailObj.modifiedSource=this.fetchingEmployeeData.modifiedSource
        this.employeeDetailObj.modifiedSourceType=this.fetchingEmployeeData.modifiedSourceType;
        if( this.fetchingEmployeeData.modifiedDttm == ''){
           this.employeeDetailObj.modifiedDttm='';
        }else{
          this.employeeDetailObj.modifiedDttm=new Date (this.fetchingEmployeeData.modifiedDttm);
        }
   
    })
    
   })

  let username =localStorage.getItem("username");
  if(username == "employee" ){   
    this.editButtonDisable=false;
    }
 }

dropdownShiftValues(){
  if(this.fetchingEmployeeData.shift == "night"){
    this.shift=[{name:'Night',code:'night'}]
  }else{
    this.shift=[{name:'Day',code:'day'}]
  }
 
}
bloodGroupValue(){
  if(this.fetchingEmployeeData.bloodGroup == 'a'){
    this.bloodgroup1=[{name:'A',code:'a'}]
  }else if(this.fetchingEmployeeData.bloodGroup == 'a+'){
    this.bloodgroup1=[{name:'A+',code:'a+'}]
  }
  else if(this.fetchingEmployeeData.bloodGroup == 'b'){
    this.bloodgroup1=[{name:'B',code:'b'}]
  }
  else if(this.fetchingEmployeeData.bloodGroup == 'b+'){
    this.bloodgroup1=[{name:'B+',code:'b+'}]
  }
  else if(this.fetchingEmployeeData.bloodGroup == 'ab'){
    this.bloodgroup1=[{name:'AB',code:'ab'}]
  }
}

 editButtonViewmode(){  
  this.shift=[
    {name:'Day',code:'day'},
    {name:'Night',code:'night'}
   ];
   this.bloodGroup =[
    {name:'A',code:'a'},
    {name:'A+', code:'a+'},
    {name:'B',code:'b'},
    {name:'B+',code:'b+'},
    { name:'AB',code:'ab'}
      ]
  this.editmode=true;
  this.disabledSubmitCancelButton=true;
  this.disabledEditBackButton=false;
 }
 
 disabledInputFields(){
  this.editmode=false;
  this.disabledSubmitCancelButton=false;
  this.disabledEditBackButton=true;
  this.ngOnInit();
 }

 navigateEmployeeListScreen(){
  this.router.navigate(['/EMP']);
}

}



