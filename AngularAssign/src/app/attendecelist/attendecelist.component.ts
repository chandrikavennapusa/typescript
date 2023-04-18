import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-attendecelist',
  templateUrl: './attendecelist.component.html',
  styleUrls: ['./attendecelist.component.css'],
  providers: [MessageService],
})
export class AttendecelistComponent implements OnInit{
  // shift dropdown details
  shift: any;
  // shift value two way databinding
  shiftValue: any;
  // date value two way databinding
  dateValue: any;
  // maxdate represents calender fileds
  maxDate = new Date();
  // maxdate represents calender fileds
  maxTime = new Date();
  // access to the attendece service
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
    this.passingParameterUrl();
  }

  // passing the parameter in the url
  passingParameterUrl() {
    this.activatedRoute.paramMap.subscribe((parm) => {
      (this.service.employeeId = parm.get('id')?.substring(1)),
        (this.service.departmentId = parm.get('id')?.substring(1));
      this.attendenceDetailObj.employeeId = this.service.employeeId;
      this.attendenceDetailObj.departmentId = this.service.departmentId;
    });
  }

  //Intialization of attendencedetails
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

  //Submission of all attendence details
  submitAttendenceData() {
    this.attendenceDetailObj.date = this.datepipe.transform(
      this.dateValue,
      'shortDate'
    );
    this.attendenceDetailObj.createdSource = localStorage.getItem('username');
    this.attendenceDetailObj.createdSourceType =
      localStorage.getItem('username');
    this.attendenceDetailObj.createdDttm = this.datepipe.transform(
      new Date(),
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.shift = this.shiftValue.code;
    this.service.addAttendanceInformation(this.attendenceDetailObj).subscribe(
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
    this.router.navigate(['/AttendenceListScreenTable']);
  }
  // Navigate to the attendencelistscreen
  navigateAttendeceListScreen() {
    this.router.navigate(['/AttendenceListScreenTable']);
  }
}
