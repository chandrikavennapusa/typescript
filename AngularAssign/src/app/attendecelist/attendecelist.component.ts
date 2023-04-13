import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendecelist',
  templateUrl: './attendecelist.component.html',
  styleUrls: ['./attendecelist.component.css'],
})
export class AttendecelistComponent {
  shift:any;
  shift11:any;
  month11:any;
  date11:any;
  maxDate = new Date();
  maxTime = new Date();
  constructor(
    private service: ServicesService,
    private router: Router,
    private datepipe: DatePipe
  ) {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
  }
  ngOnInit() {
    this.attendenceDetailsIntialization();
    this.attendenceDetailObj.employeeId = this.service.EmployeeId;
    this.attendenceDetailObj.departmentId = this.service.DepartmentId;
  }
  attendenceDetailObj: AttenService = new AttenService();

  attendenceDetailsIntialization() {
    this.attendenceDetailObj = {
      employeeId: '',
      date: '',
      departmentId: '',
      available: '',
      available1: '',
      checkIn: '',
      checkout: '',
      attendanceCount: '',
      shift: '',
      createdSource: '',
      createdSourceType: '',
      createdDttm: '',
      modifiedSource: '',
      modifiedSourceType: '',
      modifiedDttm: '',
    };
  }

  submitAttendenceData() {
    this.attendenceDetailObj.date = this.datepipe.transform(
      this.date11,
      'shortDate'
    );
    this.attendenceDetailObj.createdSource = localStorage.getItem('username');
    this.attendenceDetailObj.createdSourceType = localStorage.getItem('username');
    this.attendenceDetailObj.createdDttm = this.datepipe.transform(
      new Date(),
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.shift = this.shift11.code;
    this.service.addAttendanceInformation(this.attendenceDetailObj).subscribe();
    this.router.navigate(['/ATDE']);
    console.log(this.attendenceDetailObj);
  }

  navigateAttendeceListScreen() {
    this.router.navigate(['/ATDE']);
  }
}
