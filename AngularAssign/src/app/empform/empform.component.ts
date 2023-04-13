import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api/message';

import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css'],
})
export class EmpformComponent {
  sucessmessagedata: Message[];
  maxDate = new Date();
  bloodGroup: any;
  shift: any;
  shift19: any;
  bloddgroup1: any;
  myDate: Date;
  dob11: any;
  doj11: any;
  constructor(
    private service: ServicesService,
    private router: Router,
    private datepipe: DatePipe
  ) {
    this.bloodGroup = [
      { name: 'A', code: 'a' },
      { name: 'A+', code: 'a+' },
      { name: 'B', code: 'b' },
      { name: 'B+', code: 'b+' },
      { name: 'AB', code: 'ab' },
    ];

    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
  }

  employeeDetailObj: EmpService = new EmpService();

  employeeDetailsIntialization() {
    this.employeeDetailObj = {
      employeeId: '',
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      mailId: '',
      phoneNumber: '',
      bloodGroup: '',
      address: '',
      department: '',
      dateOfJoining: '',
      salary: '',
      shift: '',
      createdSource: '',
      createdSourceType: '',
      createdDttm: '',
      modifiedSource: '',
      modifiedSourceType: '',
      modifiedDttm: '',
    };
  }

  ngOnInit() {
    this.employeeDetailsIntialization();
    this.employeeDetailObj.employeeId = this.service.emplyeeid;
  }

  submitEmployeeData() {
    this.myDate = new Date();
    this.employeeDetailObj.dob = this.datepipe.transform(
      this.dob11,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.dateOfJoining = this.datepipe.transform(
      this.doj11,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.bloodGroup= this.bloddgroup1.code;
    this.employeeDetailObj.shift = this.shift19.code;
    this.employeeDetailObj.createdSource = localStorage.getItem('username');
    this.employeeDetailObj.createdSourceType = localStorage.getItem('username');
    this.employeeDetailObj.createdDttm = this.datepipe.transform(
      this.myDate,
      'M/d/yy,  h:mm:ss a'
    );
    this.service.addingEmployeeInformation(this.employeeDetailObj).subscribe();
    [
      {
        severity: 'success',
        summary: 'Employee list',
        detail: 'form successfully added',
      },
    ];
    this.router.navigate(['/EMP']);
  }

  navigateEmpListScreen() {
    this.router.navigate(['/EMP']);
  }
}
