import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { table } from 'console';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

import { ServicesService } from '../services.service';
import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService],
})
export class EmployeeComponent {
  fetchingEmployeeData:any;
  errorMessage: any;
  empId: string;
  cols:any;
  isboolean:any;
  first2: number = 0;
  rows2: number = 10;
  totalrecords = 0;
  attendeceEmployeeId:any;
  error:any;
  addButtonDisabled = true;
  deleteButtonViewmode = true;
  visible: boolean;
  empidsucessmessagedata: Message[];

  constructor( private service: ServicesService,private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  rowsPerPageOptions = [
    { label: 'show 2', value: 2 },
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];

  onPageChange(event:any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
    this.totalrecords = event.totalrecords;
  }
  @ViewChild('EmpidForm') form: NgForm;

  showDialog() {
    this.visible = true;
  }
 
  doubleClick(employeeId:any) {
    this.service.employeeid = employeeId;
    this.router.navigate(['/EMPLIST/:'+employeeId+'']);
  }

  ngOnInit() {
    this.fetchingEmployeeDetails();

    this.cols = [
      { field: 'employeeId', header: 'Employee Id' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'dob', header: 'Date Of Birth' },
      { field: 'gender', header: 'Gender' },
      { field: 'phoneNumber', header: 'Phone Number' },
      { field: 'dateOfJoining', header: 'Date Of Joining' },
      { field: 'salary', header: 'Salary' },
      { field: 'shift', header: 'Shift' },
      { field: 'createdSource', header: 'CreatedSource' },
      { field: 'createdSourceType', header: 'CreatedSourceType' },
      { field: 'createdDttm', header: 'CreatedDttm' },
      { field: 'modifiedSource', header: 'ModifiedSource' },
      { field: 'modifiedSourceType', header: 'ModifiedSourceType' },
      { field: 'modifiedDttm', header: 'ModifiedDttm' },
    ];

    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.addButtonDisabled = false;
      this.deleteButtonViewmode  = false;
    }
  }

  deleteBasedOnEmployeeId(id:any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      accept: () => {
        this.deletebyEmployeeId(id);
      },
    });
  }

  deletebyEmployeeId(id:any) {
       this.service.fetchingAttendeDataBasedOnEmployeeId(id).subscribe(
      (data) => {
        this.attendeceEmployeeId = data;
        if (this.attendeceEmployeeId.employeeId == id) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'this employee id is already exit in Attendence table',
          });
        }
      },
      (err) => {
        this.service.deletingEmployeeId(id).subscribe(
          (response) => {
            console.log(response);
          },
          (err: HttpErrorResponse) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: err.error.text,
            });
            this.fetchingEmployeeDetails();
          },
          () => {
            console.log('complete');
            console.log('sucess block');
          }
        );
      }
    );
  }

  
  fetchingEmployeeDetails() {
    this.service.fetchingEmployeeDetails().subscribe(
      (data) => {
        this.fetchingEmployeeData = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
    () => {
      console.log('sucessfull');
    };
  }

  checkEmployeeIdExist() {
    this.isboolean = false;
    this.fetchingEmployeeData.find((empdata) => {
      if (empdata.employeeId == this.empId) {
        this.isboolean = true;
      }
    });
    if (this.isboolean == true) {
      this.messageService.add({
        severity: 'error',
        summary: 'Employee List',
        detail: 'Employee Id is already exit',
      });
    } else {
      this.empidsucessmessagedata = [
        {
          severity: 'success',
          summary: 'Employee list',
          detail: 'enter the table fields',
        },
      ];

      this.router.navigate(['/EMPFORM']);
      this.service.emplyeeid = this.empId;
    }
  }


  resetEmployeeId() {
    this.visible = false;
    this.form.reset();
  }
}
