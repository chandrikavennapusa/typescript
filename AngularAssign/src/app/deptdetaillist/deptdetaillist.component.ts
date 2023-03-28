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

constructor(private service:ServicesService, private router:Router){}
  ngOnInit(){
    let deptdata = this.service.getdeptData();
    this.departmentId=deptdata.departmentId
    this.departmentName=deptdata.departmentName;
    this.noOfEmployee=deptdata.noOfEmployee;
    this.managerId=deptdata.managerId;
    this.createdSource=deptdata.createdSource;
    this.createdSourceType=deptdata.createdSourceType
    this.createdDttm= deptdata.createdDttm;
   this.modifiedSource=deptdata.modifiedSource
    this.modifiedSourceType=deptdata.modifiedSourceType;
    this.modifiedDttm=deptdata.modifiedDttm;
  }
  backtodept(){
    this.router.navigate(['/DEPT'])
  }
}
