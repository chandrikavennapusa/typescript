import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { map } from 'rxjs';

import { ServicesService } from '../services.service';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [MessageService],
})
export class AttendanceComponent {
  employeeId = '';
  departmentid = '';
  serchempidvalue = '';
  cols: any;
  empdata: any;
  deptdata: any;
  empid: boolean;
  deptid: boolean;
  isboolean:any;;
  visible: boolean;
  first2: number = 0;
  rows2: number = 10;
  totalrecords = 0;
  addButtonDisabled = true;
  deleteviewmode = true;
  serachempview = false;

  fectingAttendenceData: any = [];
  @ViewChild('deptidEmpidForm') form: NgForm;
  constructor(
    private service: ServicesService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  rowsPerPageOptions = [
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];

  onPageChange(event: any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
    this.totalrecords = event.totalrecords;
  }
  showDialog() {
    this.visible = true;
  }
  ngOnInit() {
    this.cols = [
      { field: 'employeeId', header: 'Employee Id' },
      { field: 'date', header: 'Date' },
      { field: 'departmentId', header: 'Department Id' },
      { field: 'available', header: 'Available' },
      { field: 'checkIn', header: 'Check In' },
      { field: 'checkout', header: 'Check Out' },
      { field: 'attendanceCount', header: 'Attendance Count' },
      { field: 'shift', header: 'Shift' },
      { field: 'createdSource', header: 'CreatedSource' },
      { field: 'createdSourceType', header: 'CreatedSourceType' },
      { field: 'createdDttm', header: 'CreatedDttm' },
      { field: 'modifiedSource', header: 'ModifiedSource' },
      { field: 'modifiedSourceType', header: 'ModifiedSourceType' },
      { field: 'modifiedDttm', header: 'ModifiedDttm' },
    ];

    this.service.fetchingEmployeeDetails().subscribe(
      (response) => (this.empdata = response),
      (err) => {
        console.log(err.error);
      },
      () => {
        console.log('completed');
      }
    );

    this.service.fetchingDepartmentData().subscribe(
      (data) => (this.deptdata = data),
      (err) => {
        console.log(err.error);
      },
      () => {
        console.log('completed sucessfully');
      }
    );

    this.fetchingAttendeceData();
    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.addButtonDisabled = false;
      this.deleteviewmode = false;
      this.serachempview = true;
    }
  }

  t;

  checkEmployeeIdDeparmentIdExist() {
    this.isboolean = false;
    for (let d of this.empdata) {
      if (d.employeeId == this.employeeId) {
        this.empid = true;
      }
    }
    for (let de of this.deptdata) {
      console.log(de.departmentId);
      if (de.departmentId == this.departmentid) {
        this.deptid = true;
      }
      this.fectingAttendenceData.find((empdeptdata) => {
        if (empdeptdata.employeeId == this.employeeId) {
          this.isboolean = true;
        }
      });
    }

    if (this.isboolean == true) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'the Employee id is already exit',
      });
      this.employeeId = '';
      this.departmentid = '';
    } else if (this.empid && this.deptid) {
      this.router.navigate(['/ATDELIST']);
      this.service.EmployeeId = this.employeeId;
      this.service.DepartmentId = this.departmentid;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: ' Id is not match',
      });
      this.employeeId = '';
      this.departmentid = '';
    }

    this.form.reset();
  }

  clearEmployeeIdDepartmentId() {
    this.employeeId = '';
    this.departmentid = '';
    this.visible = false;
    this.form.reset();
  }

  deleteByEmployeeIdDepartmetId(empid:any, deptid:any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      accept: () => {
        this.deleteempiddepid(empid, deptid);
      },
    });
    this.fetchingAttendeceData();
  }
  deleteempiddepid(empid:any, deptid:any) {
    this.service.deleteBasedOnEmployeeIdDepartmentId(empid, deptid).subscribe(
      (response) => {
        console.log(response);
        console.log('response block');
      },

      (err: HttpErrorResponse) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: err.error.text,
        });
        this.fetchingAttendeceData();
      },
      () => {
        console.log('complete');
        console.log('sucess block');
      }
    );
  }

  fetchingAttendeceData() {
    this.service.fetchingAttendenceDetails().subscribe(
      (data) => (this.fectingAttendenceData = data),
      (err) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: err.error.text,
        });
      },
      () => {
        console.log('completed');
      }
    );
  }

  doubleClick(employeeId:any) {
    this.service.attendenceemployeeid = employeeId;
    this.router.navigate(['/ATTDEFORM/:' + employeeId + '']);
  }

  searchingByEmployeeId() {
    if (this.serchempidvalue == '') {
      this.service
        .fetchingAttendenceDetails()
        .subscribe((data) => (this.fectingAttendenceData = data));
    } else {
      this.service
        .fetchingAttendeDataBasedOnEmployeeId(this.serchempidvalue)
        .subscribe(
          (response) => {
            this.fectingAttendenceData = [];
            this.fectingAttendenceData.push(response);
            console.log(this.fectingAttendenceData);
          },
          (err: HttpErrorResponse) => {
            this.fectingAttendenceData = [];
          },
          () => {
            console.log('completed');
          }
        );
    }
  }
}
