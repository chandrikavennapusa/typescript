import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { ServicesService } from '../services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [MessageService],
})
export class AttendanceComponent implements OnInit {
  //Employeeid is using two way binding
  employeeId = '';
  // Departmentid is using two way binding
  departmentid = '';
  // searching by employeeid using two way binding
  serchEmployeeIdValue = '';
  // columns data for heading and data
  cols: any;
  // Employee details
  empData: any;
  //Department details
  deptData: any;
  // bollean value is true or false
  isEmployeeid: boolean;
  // bollean value is true or false
  isdepartmentid: boolean;
  // bollean value is true or false
  isEmployeeId: any;
  // Dialog box is opened
  visible: boolean;
  // paginator first value
  first = 0;
  // paginator rows
  rows = 10;
  // paginator total records
  totalRecords = 0;
  // Add button is disabled
  addButtonDisabled = true;
  // Delete buton is disabled
  deleteButtonViewmode = true;
  // serach input filed is disabled
  serachInputFiledViewmode = false;
  // fetching attendece data
  fectingAttendenceData: any = [];
  @ViewChild('deptidEmpidForm') form: NgForm;

  constructor(
    private service: ServicesService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    // table heading and data fileds
    this.columnFileds();
    // fetching employee details
    this.employeeDetails();
    //fetching department details
    this.departmentDetails();
    //fetching attendence details
    this.fetchingAttendeceData();
    // login employee view
    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.addButtonDisabled = false;
      this.deleteButtonViewmode = false;
      this.serachInputFiledViewmode = true;
    }
  }

  // paginator for rows fileds
  rowsPerPageOptions = [
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];
  
  // table heading and data fileds
  columnFileds() {
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
  }

  // fetching employee details
  employeeDetails() {
    this.service.fetchingEmployeeDetails().subscribe(
      (response) => {
        this.empData = response;
      },
      (err) => {
        console.log(err.error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  // fetching department details
  departmentDetails() {
    this.service.fetchingDepartmentData().subscribe(
      (data) => (this.deptData = data),
      (err) => {
        console.log(err.error);
      },
      () => {
        console.log('completed sucessfully');
      }
    );
  }

  // paginator page changes
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.totalRecords = event.totalrecords;
  }

  //Dialog box show the EmployeeId and DepartmentId
  showDialog() {
    this.visible = true;
  }

  // check the EmployeeId and DepartmentId is exist or not
  checkEmployeeIdDeparmentIdExist() {
    this.isEmployeeId = false;
    for (let emp of this.empData) {
      if (emp.employeeId == this.employeeId) {
        this.isEmployeeid = true;
      }
    }
    for (let dept of this.deptData) {
      if (dept.departmentId == this.departmentid) {
        this.isdepartmentid = true;
      }
      this.fectingAttendenceData.find((empdeptdata: any) => {
        if (empdeptdata.employeeId == this.employeeId) {
          this.isEmployeeId = true;
        }
      });
    }

    if (this.isEmployeeId == true) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'the Employee id is already exit',
      });
    } else if (this.isEmployeeid && this.isdepartmentid) {
      this.router.navigate([
        '/AttendenceDetailTableScreen/:' + this.employeeId + '/:' + this.departmentid + '',
      ]);
      this.service.employeeId = this.employeeId;
      this.service.departmentId = this.departmentid;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: ' Id is not match',
      });
      this.form.reset();
    }
  }

  // Clears the EmployeId and DepartmentId data
  clearEmployeeIdDepartmentId() {
    this.visible = false;
    this.form.reset();
  }

  // Deleting the sepecific row
  deleteByEmployeeIdDepartmetId(empid: any, deptid: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      accept: () => {
        this.deleteempiddepid(empid, deptid);
      },
    });
    this.fetchingAttendeceData();
  }
  deleteempiddepid(empid: any, deptid: any) {
    this.service.deleteBasedOnEmployeeIdDepartmentId(empid, deptid).subscribe(
      (response) => {
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
      }
    );
  }

  // Fetching the Attemdencedetails
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

  // when we  double click, will open the record
  doubleClick(employeeId: any) {
    this.service.employeeId = employeeId;
    this.router.navigate(['/AttendenceDetailScreen/:' + employeeId + '']);
  }

  // Searching the based on EmployeeId
  searchingByEmployeeId() {
    if (this.serchEmployeeIdValue == '') {
      this.service
        .fetchingAttendenceDetails()
        .subscribe((data) => (this.fectingAttendenceData = data));
    } else {
      this.service
        .fetchingAttendeDataBasedOnEmployeeId(this.serchEmployeeIdValue)
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
