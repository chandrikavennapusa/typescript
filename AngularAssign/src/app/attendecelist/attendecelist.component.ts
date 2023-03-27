import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-attendecelist',
  templateUrl: './attendecelist.component.html',
  styleUrls: ['./attendecelist.component.css']
})
export class AttendecelistComponent {
  @ViewChild('attendencedetails') form;
  employeeId='';
  month:Date;
  date:Date;
  departmentId='';
  available='';
  available1='';
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
  onsubmit(){
    console.log(this.form);
    this.service.addattendencedata(this.form).subscribe();
    this.router.navigate(['/ATDE'])

  }
  constructor(private service:ServicesService,private router:Router){}
  ngOnInit(){
     this.employeeId=this.service.EmployeeId;
      this.departmentId=this.service.DepartmentId;
  }
  gobackatten(){
    this.router.navigate(['/ATDE'])
  }
}
