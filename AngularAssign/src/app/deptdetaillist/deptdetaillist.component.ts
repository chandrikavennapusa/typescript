import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-deptdetaillist',
  templateUrl: './deptdetaillist.component.html',
  styleUrls: ['./deptdetaillist.component.css']
})
export class DeptdetaillistComponent {
  departmentId='';
  departmentName='';
  noOfEmployee='';
  managerId='';
  createdSource='';
  createdSourceType='';
  createdDttm='';
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm='';
  editmode=false;
  fecthingdeptdata;
constructor(private service:ServicesService, private router:Router){}
  ngOnInit(){
     this.service.fectingdata(this.service.deptid).subscribe(
      data =>{
        this.fecthingdeptdata=data;
        this.departmentId=this.fecthingdeptdata.departmentId
    this.departmentName=this.fecthingdeptdata.departmentName;
    this.noOfEmployee=this.fecthingdeptdata.noOfEmployee;
    this.managerId=this.fecthingdeptdata.managerId;
    this.createdSource=this.fecthingdeptdata.createdSource;
    this.createdSourceType=this.fecthingdeptdata.createdSourceType
    this.createdDttm= this.fecthingdeptdata.createdDttm;
   this.modifiedSource=this.fecthingdeptdata.modifiedSource
    this.modifiedSourceType=this.fecthingdeptdata.modifiedSourceType;
    this.modifiedDttm=this.fecthingdeptdata.modifiedDttm;
      }
     );
  }
  backtodept(){
    this.router.navigate(['/DEPT'])
  }
}
