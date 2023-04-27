import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
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
import { SortIcon } from 'primeng/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService],
})
export class EmployeeComponent implements OnInit {
  // fetching employee data
  fetchingEmployeeData: any;
  // showing error mesage
  errorMessage: any;
  // ngmodel employeeid
  employeeId: string;
  // column fileds
  cols: any;
  // boolean value
  isEmployeeId: any;
  // paginator first row value
  first = 0;
  // paginator rows
  rows = 10;
  //paginator totalrecords
  totalRecords = 0;
  // Attendence employeeid
  attendeceEmployeeId: any;
  // Add button disabled
  addButtonDisabled = true;
  // delete button disabled
  deleteButtonViewmode = true;
  // boolean value in dialog box
  visible: boolean;
  // sucess message
  empidsucessmessagedata: Message[];
  paginatorDisable:number;
  // rowsperpageoptions in paginator
  rowsPerPageOptions = [
    { label: 'show 2', value: 2 },
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];
  @ViewChild('EmpidForm') form: NgForm;

  constructor(
    private service: ServicesService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.fetchingEmployeeDetails();
    this.columnsDetails();
    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.addButtonDisabled = false;
      this.deleteButtonViewmode = false;
    }
  }


  // column details
  columnsDetails() {
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
  }

  // paginator onpagechanges
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.totalRecords = event.totalrecords;
  }

  // show dialog box
  showDialog() {
    this.visible = true;
  }

  // when we double click,rows will be open
  doubleClick(employeeId: any) {
    this.service.employeeId = employeeId;
    this.router.navigate(['/EmployeeDetailFormScreen/:' + employeeId + '']);
  }

  //Deleting the sepecific row
  deleteBasedOnEmployeeId(id: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      accept: () => {
        this.deletebyEmployeeId(id);
      },
    });
  }

  deletebyEmployeeId(id: any) {
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
          }
        );
      }
    );
  }

  // Fetching the employeedetails
  fetchingEmployeeDetails() {
    this.service.fetchingEmployeeDetails().subscribe(
      (data) => {
        this.fetchingEmployeeData = data;
        this.paginatorDisable=this.fetchingEmployeeData.length

      },
      (error) => {
        this.errorMessage = error;
      },
      () => {
        console.log('sucessfull');
      }
    );
  }

  //  check employeeid is exists or not
  checkEmployeeIdExist() {
    this.isEmployeeId = false;
    this.fetchingEmployeeData.find((empdata: any) => {
      if (empdata.employeeId == this.employeeId) {
        this.isEmployeeId = true;
      }
    });
    if (this.isEmployeeId == true) {
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
      this.router.navigate(['/EmployeeDetailScreen/:' + this.employeeId + '']);
      this.service.employeeId = this.employeeId;
    }
  }

  // Reset the Emplyoeeid
  resetEmployeeId() {
    this.visible = false;
    this.form.reset();
  }
}
