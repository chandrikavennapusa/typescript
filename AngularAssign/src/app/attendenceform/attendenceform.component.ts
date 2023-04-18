import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-attendenceform',
  templateUrl: './attendenceform.component.html',
  styleUrls: ['./attendenceform.component.css'],
  providers: [MessageService],
})
export class AttendenceformComponent implements OnInit{
  // shift drop values
  shift: any;
  // edit button disabled
  editButtonDisable = true;
  // disabled in all input fileds
  editmode = true;
  //disabled save and canecel button
  disableSaveCancelButton = false;
  // disabled edit and back button
  disableEditBackButton = true;
  // two way binding shift value
  shiftValue: any;
  // two way binding date vaue
  dateValue: any;
  // two way binding createdttm value
  createdDttmValue: any;
  // fetching employeeid based on data
  fetchingEmployeeIdBasedOnData: any;
  // maximum date
  maxDate = new Date();
  maxTime = new Date();
  attendenceDetailObj: AttenService = new AttenService();

  constructor(
    private service: ServicesService,
    private router: Router,
    private datepipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
  }

  ngOnInit() {
    this.attendenceDetailsIntialization();
    this.passingParametersUrl();
  }

  // passing parameter url and fetching attendence data beased on attendenceid
  passingParametersUrl() {
    this.activatedRoute.paramMap.subscribe((parm) => {
      this.service.employeeId = parm.get('id')?.substring(1);
      this.service
        .fetchingAttendeDataBasedOnEmployeeId(this.service.employeeId)
        .subscribe((data) => {
          this.fetchingEmployeeIdBasedOnData = data;
          this.attendenceDetailObj.employeeId =
            this.fetchingEmployeeIdBasedOnData.employeeId;
          this.dateValue = new Date(this.fetchingEmployeeIdBasedOnData.date);
          this.attendenceDetailObj.departmentId =
            this.fetchingEmployeeIdBasedOnData.departmentId;
          this.attendenceDetailObj.available =
            this.fetchingEmployeeIdBasedOnData.available;
          this.attendenceDetailObj.available =
            this.fetchingEmployeeIdBasedOnData.available;
          if (this.fetchingEmployeeIdBasedOnData.checkIn == '') {
            this.attendenceDetailObj.checkIn = '';
          } else {
            this.attendenceDetailObj.checkIn = new Date(
              this.fetchingEmployeeIdBasedOnData.checkIn
            );
          }
          if (this.fetchingEmployeeIdBasedOnData.checkout == '') {
            this.attendenceDetailObj.checkout = '';
          } else {
            this.attendenceDetailObj.checkout = new Date(
              this.fetchingEmployeeIdBasedOnData.checkout
            );
          }
          this.attendenceDetailObj.attendanceCount =
            this.fetchingEmployeeIdBasedOnData.attendanceCount;
          this.shiftValue = this.fetchingEmployeeIdBasedOnData.shift;
          this.dropdownshift();
          this.attendenceDetailObj.createdSource =
            this.fetchingEmployeeIdBasedOnData.createdSource;
          this.attendenceDetailObj.createdSourceType =
            this.fetchingEmployeeIdBasedOnData.createdSourceType;
          this.createdDttmValue = new Date(
            this.fetchingEmployeeIdBasedOnData.createdDttm
          );
          this.attendenceDetailObj.modifiedSource =
            this.fetchingEmployeeIdBasedOnData.modifiedSource;
          this.attendenceDetailObj.modifiedSourceType =
            this.fetchingEmployeeIdBasedOnData.modifiedSourceType;
          if (this.fetchingEmployeeIdBasedOnData.modifiedDttm == '') {
            this.attendenceDetailObj.modifiedDttm = '';
          } else {
            this.attendenceDetailObj.modifiedDttm = new Date(
              this.fetchingEmployeeIdBasedOnData.modifiedDttm
            );
          }
        });
      let username = localStorage.getItem('username');
      if (username == 'employee') {
        this.editButtonDisable = false;
      }
    });
  }
  // Intialization of attendencedetails
  attendenceDetailsIntialization() {
    this.attendenceDetailObj = {
      employeeId: '',
      date: '',
      departmentId: '',
      available: '',
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
  //Submission of the updated data
  submitUpdateAttendeceData() {
    this.attendenceDetailObj.date = this.datepipe.transform(
      this.dateValue,
      'shortDate'
    );
    this.attendenceDetailObj.createdDttm = this.datepipe.transform(
      this.createdDttmValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.modifiedSource = localStorage.getItem('username');
    this.attendenceDetailObj.modifiedSourceType =
      localStorage.getItem('username');
    this.attendenceDetailObj.modifiedDttm = this.datepipe.transform(
      new Date(),
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.shift = this.shiftValue.code;
    this.service.updateAttendanceDeatils(this.attendenceDetailObj).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'sucess',
          summary: 'Sucess',
          detail: 'data is added successfully',
        });
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error,
        });
      },
      () => {
        console.log('successfully completed');
      }
    );
    this.editmode = true;
    this.disableSaveCancelButton = false;
    this.disableEditBackButton = true;
    this.router.navigate(['/AttendenceListScreenTable']);
  }

  // Shift dropdown value matchs
  dropdownshift() {
    if (this.fetchingEmployeeIdBasedOnData.shift == 'night') {
      this.shift = [{ name: 'Night', code: 'night' }];
    } else {
      this.shift = [{ name: 'Day', code: 'day' }];
    }
  }

  // All inputfileds are coming enable
  editAttendenceData() {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
    this.editmode = false;
    this.disableSaveCancelButton = true;
    this.disableEditBackButton = false;
  }

  // All inputfileds are coming disable
  editModeViewData() {
    this.editmode = true;
    this.disableSaveCancelButton = false;
    this.disableEditBackButton = true;
    this.ngOnInit();
  }

  // Navigate to the employee detailscreen
  navigateAttendeceListScreen() {
    this.router.navigate(['/AttendenceListScreenTable']);
  }
}
