import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { AttenService } from '../atten.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-attendenceform',
  templateUrl: './attendenceform.component.html',
  styleUrls: ['./attendenceform.component.css'],
})
export class AttendenceformComponent {
  shift:any;
  editbtndisable = true;
  editmode = true;
  disablesavecancelbtn = false;
  disableeditbackbtn = true;
  checkin1:any;
  shift11:any;
  date11:any;
  createdDttm11:any;
  fetchingEmployeeIdBasedOnData: any;
  maxDate = new Date();
  maxTime = new Date();
  constructor(
    private service: ServicesService,
    private router: Router,
    private datepipe: DatePipe,
    private activatedRoute: ActivatedRoute
  ) {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
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

  submitUpdateAttendeceData() {
    this.attendenceDetailObj.date = this.datepipe.transform(
      this.date11,
      'shortDate'
    );
    this.attendenceDetailObj.createdDttm = this.datepipe.transform(
      this.createdDttm11,
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.modifiedSource = localStorage.getItem('username');
    this.attendenceDetailObj.modifiedSourceType =
      localStorage.getItem('username');
    this.attendenceDetailObj.modifiedDttm = this.datepipe.transform(
      new Date(),
      'M/d/yy,  h:mm:ss a'
    );
    this.attendenceDetailObj.shift = this.shift11.code;
    this.service.updateAttendanceDeatils(this.attendenceDetailObj).subscribe();
    this.editmode = true;
    this.disablesavecancelbtn = false;
    this.disableeditbackbtn = true;
    this.router.navigate(['/ATDE']);
  }

  ngOnInit() {
    this.attendenceDetailsIntialization();

    this.activatedRoute.paramMap.subscribe((parm) => {
      this.service.attendenceemployeeid = parm.get('id')?.substring(1);
      this.service
        .fetchingAttendeDataBasedOnEmployeeId(this.service.attendenceemployeeid)
        .subscribe((data) => {
          this.fetchingEmployeeIdBasedOnData = data;
          this.attendenceDetailObj.employeeId =
            this.fetchingEmployeeIdBasedOnData.employeeId;
          this.date11 = new Date(this.fetchingEmployeeIdBasedOnData.date);
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
          this.shift11 = this.fetchingEmployeeIdBasedOnData.shift;
          this.dropdownshift();
          this.attendenceDetailObj.createdSource =
            this.fetchingEmployeeIdBasedOnData.createdSource;
          this.attendenceDetailObj.createdSourceType =
            this.fetchingEmployeeIdBasedOnData.createdSourceType;
          this.createdDttm11 = new Date(
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
        this.editbtndisable = false;
      }
    });
  }

  dropdownshift() {
    if (this.fetchingEmployeeIdBasedOnData.shift == 'night') {
      this.shift = [{ name: 'Night', code: 'night' }];
    } else {
      this.shift = [{ name: 'Day', code: 'day' }];
    }
  }

  editAttendenceData() {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
    this.editmode = false;
    this.disablesavecancelbtn = true;
    this.disableeditbackbtn = false;
  }

  editModeViewData() {
    this.editmode = true;
    this.disablesavecancelbtn = false;
    this.disableeditbackbtn = true;
    this.ngOnInit();
  }

  navigateAttendeceListScreen() {
    this.router.navigate(['/ATDE']);
  }
}
