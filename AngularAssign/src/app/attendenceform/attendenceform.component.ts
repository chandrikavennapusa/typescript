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
 
  // deptid;
  shift;
  editbtndisable=true;
  editmode=true;
  disablesavecancelbtn=false;
  disableeditbackbtn=true;

  constructor(private service:ServicesService , private router:Router){
    this.shift=[
      {name:'day'},
      {name:'night'}
     ]
  }
shift11;
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
    this.attendetailObj.modifiedSource=localStorage.getItem("username");
    this.attendetailObj.modifiedSourceType=localStorage.getItem("username");
    this.attendetailObj.modifiedDttm=new Date;

    this.attendetailObj.shift=this.shift11.name;
      this.service.updateattence(this.attendetailObj).subscribe();
      this.editmode=true;
    this.disablesavecancelbtn=false;
    this.disableeditbackbtn=true;
    this.router.navigate(['/ATDE']);
  }

  backtoatend(){
this.router.navigate(['/ATDE']);
  }

  dropdownshift(){
  if(this.shift11 == "night"){
    this.shift=[{name:'night'}]
    
   }
   else{
     this.shift=[{name:'day'}];
   
   }
  }

  fecthingdeptidbaseddadata;
  ngOnInit(){
    console.log(this.service. attendenceemployeeid);
    this.service.gettingattendencedatabasedonempid(this.service. attendenceemployeeid).subscribe(
      data=>{ this.fecthingdeptidbaseddadata=data;
console.log(this.fecthingdeptidbaseddadata);

        this.attendetailObj.employeeId=this.fecthingdeptidbaseddadata.employeeId;

          this.attendetailObj.month=new Date(this.fecthingdeptidbaseddadata.month);
          this.attendetailObj.date= new Date(this.fecthingdeptidbaseddadata.date);
          this.attendetailObj.departmentId= this.fecthingdeptidbaseddadata.departmentId;
          this.attendetailObj.available= this.fecthingdeptidbaseddadata.available;
          this.attendetailObj.available= this.fecthingdeptidbaseddadata.available;
         this.attendetailObj.checkIn= this.fecthingdeptidbaseddadata.checkIn;
          this.attendetailObj.checkout= this.fecthingdeptidbaseddadata.checkout;
         this.attendetailObj.attendanceCount= this.fecthingdeptidbaseddadata.attendanceCount;
      
         this.shift11= this.fecthingdeptidbaseddadata.shift;
         
        this.dropdownshift();    
          this.attendetailObj.createdSource= this.fecthingdeptidbaseddadata.createdSource;
          this.attendetailObj.createdSourceType= this.fecthingdeptidbaseddadata.createdSourceType;
          this.attendetailObj.createdDttm= new Date( this.fecthingdeptidbaseddadata.createdDttm);
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
    // let atddata= this.service.getAttendencedata();
    
  // 
  }
  
   
 
  editattende(){
    this.shift=[{name:'day'},{name:'night'}];
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
