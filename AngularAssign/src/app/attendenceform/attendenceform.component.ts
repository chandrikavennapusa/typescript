import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendenceform',
  templateUrl: './attendenceform.component.html',
  styleUrls: ['./attendenceform.component.css']
})
export class AttendenceformComponent {
 
  shift;
  editbtndisable=true;
  editmode=true;
  disablesavecancelbtn=false;
  disableeditbackbtn=true;
  checkin1;
  shift11;
  maxDate=new Date(); 
  constructor(private service:ServicesService , private router:Router,private datepipe: DatePipe){
    this.shift=[
      {name:'Day',code:'day'},
      {name:'Night',code:'night'}
     ]
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
 
  date11;
  createdDttm11;
   // submission in updated values
  onSubmit(){
    this.attendetailObj.date=this.datepipe.transform(this.date11,'shortDate');

    this.attendetailObj.createdDttm=this.datepipe.transform(this.createdDttm11,'medium');
    
    this.attendetailObj.modifiedSource=localStorage.getItem("username");
    this.attendetailObj.modifiedSourceType=localStorage.getItem("username");
    this.attendetailObj.modifiedDttm=this.datepipe.transform(new Date(),'medium');
    this.attendetailObj.shift=this.shift11.name;
     this.service.updateattence(this.attendetailObj).subscribe();
    this.editmode=true;
    this.disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
    this.router.navigate(['/ATDE']);
  }

 

 // Navigate to Attendence list screen
  backtoatend(){
this.router.navigate(['/ATDE']);
  }

  dropdownshift(){
  if(this.shift11 == "Night"){
    this.shift=[{name:'Night'}]
   }
   else{
     this.shift=[{name:'Day'}];
   
   }
  }
  fecthingdeptidbaseddadata;

  ngOnInit(){
//  Fecthing the data based on  Attendence Employee Id
    this.service. gettingattendedatabasedonempid(this.service.attendenceemployeeid).subscribe(
      data=>{ this.fecthingdeptidbaseddadata=data;
console.log(this.fecthingdeptidbaseddadata);
        this.attendetailObj.employeeId=this.fecthingdeptidbaseddadata.employeeId;
          this.date11= new Date(this.fecthingdeptidbaseddadata.date);
      
          this.attendetailObj.departmentId= this.fecthingdeptidbaseddadata.departmentId;
          this.attendetailObj.available= this.fecthingdeptidbaseddadata.available;
          this.attendetailObj.available= this.fecthingdeptidbaseddadata.available;
          console.log(this.fecthingdeptidbaseddadata.checkIn)
          console.log(this.fecthingdeptidbaseddadata.checkIn)
          if(this.fecthingdeptidbaseddadata.checkIn == ''){
            this.attendetailObj.checkIn='';
          }else{
            this.attendetailObj.checkIn=new Date(this.fecthingdeptidbaseddadata.checkIn);
          }
          if(this.fecthingdeptidbaseddadata.checkout == ''){
            this.attendetailObj.checkout='';
          }else{
            this.attendetailObj.checkout= new Date(this.fecthingdeptidbaseddadata.checkout);
          }
         this.attendetailObj.attendanceCount= this.fecthingdeptidbaseddadata.attendanceCount;
         this.shift11= this.fecthingdeptidbaseddadata.shift;
        this.dropdownshift();    
          this.attendetailObj.createdSource= this.fecthingdeptidbaseddadata.createdSource;
          this.attendetailObj.createdSourceType= this.fecthingdeptidbaseddadata.createdSourceType;
          this.createdDttm11= new Date( this.fecthingdeptidbaseddadata.createdDttm);
          this.attendetailObj.modifiedSource= this.fecthingdeptidbaseddadata.modifiedSource;
          this.attendetailObj.modifiedSourceType= this.fecthingdeptidbaseddadata.modifiedSourceType;
          if( this.fecthingdeptidbaseddadata.modifiedDttm == ''){
            this.attendetailObj.modifiedDttm='';
          }else{
            this.attendetailObj.modifiedDttm=new Date( this.fecthingdeptidbaseddadata.modifiedDttm);
          }
          let username =localStorage.getItem("username");
          if(username == "employee" ){
        
            this.editbtndisable=false;
        }

      }
    ); 
  }
  
 // when we click Edit button, all the  input fields are enbled  
 
  editattende(){
    this.shift=[{name:'Day',code:'day'},{name:'Night',code:'night'}];
    this.editmode=false;
    this.disablesavecancelbtn=true;
    this.disableeditbackbtn=false;
  }
// when we click Cancel button , all the input fields are disabled
  cancelbtn(){
    this.editmode=true;
    this.disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
    this.ngOnInit();
   }
}
