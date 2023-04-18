import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  providers: [MessageService],
})
export class EmplistComponent implements OnInit{
  // calender filed fix max date
  maxDate = new Date();
  // disabled submit and cancel buttons
  disabledSubmitCancelButton = false;
  // disabled edit and back button
  disabledEditBackButton = true;
  // disabled all input fileds
  editmode = false;
  // disabled in edit button
  editButtonDisable = true;
  // fetching employee data
  fetchingEmployeeData: any;
  // drop down shift values
  shift: any;
  //ngmodel shiftvalues
  shiftValue: any;
  // ngmodel dateofjoiningvalue
  dateOfJoiningValue: any;
  // ngmodel dateofbirth
  dobValue: any;
  // ngmodel createdttmvalue
  createdDttmValue: any;
  // drop down bloodroup values
  bloodGroup: any;
  // ngmodel bloodgroup value
  bloodgroupValue: any;
  employeeDetailObj: EmpService = new EmpService();

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

    this.bloodGroup = [
      { name: 'A', code: 'a' },
      { name: 'A+', code: 'a+' },
      { name: 'B', code: 'b' },
      { name: 'B+', code: 'b+' },
      { name: 'AB', code: 'ab' },
    ];
  }

  ngOnInit() {
    this.fecthingEmployeeData();
    let username = localStorage.getItem('username');
    if (username == 'employee') {
      this.editButtonDisable = false;
    }
  }

  // passing parameter in url and fetching employee data
  fecthingEmployeeData() {
    this.activatedRoute.paramMap.subscribe((parm) => {
      this.service.employeeId = parm.get('id')?.substring(1);
      this.service
        .fetchingEmployeeIdDetails(this.service.employeeId)
        .subscribe((results: any) => {
          this.fetchingEmployeeData = results;
          this.employeeDetailObj.employeeId =
            this.fetchingEmployeeData.employeeId;
          this.employeeDetailObj.firstName =
            this.fetchingEmployeeData.firstName;
          this.employeeDetailObj.lastName = this.fetchingEmployeeData.lastName;
          this.employeeDetailObj.gender = this.fetchingEmployeeData.gender;
          this.employeeDetailObj.gender = this.fetchingEmployeeData.gender;
          this.employeeDetailObj.gender = this.fetchingEmployeeData.gender;
          this.dobValue = new Date(this.fetchingEmployeeData.dob);
          this.employeeDetailObj.mailId = this.fetchingEmployeeData.mailId;
          this.employeeDetailObj.phoneNumber =
            this.fetchingEmployeeData.phoneNumber;
          this.dateOfJoiningValue = new Date(
            this.fetchingEmployeeData.dateOfJoining
          );
          this.bloodgroupValue = this.fetchingEmployeeData.bloodGroup;
          this.bloodGroupValue();
          this.employeeDetailObj.salary = this.fetchingEmployeeData.salary;
          this.shiftValue = this.fetchingEmployeeData.shift;
          this.dropdownShiftValues();
          this.employeeDetailObj.address = this.fetchingEmployeeData.address;
          this.employeeDetailObj.department =
            this.fetchingEmployeeData.department;
          this.employeeDetailObj.createdSource =
            this.fetchingEmployeeData.createdSource;
          this.employeeDetailObj.createdSourceType =
            this.fetchingEmployeeData.createdSourceType;
          this.createdDttmValue = new Date(
            this.fetchingEmployeeData.createdDttm
          );
          this.employeeDetailObj.modifiedSource =
            this.fetchingEmployeeData.modifiedSource;
          this.employeeDetailObj.modifiedSourceType =
            this.fetchingEmployeeData.modifiedSourceType;
          if (this.fetchingEmployeeData.modifiedDttm == '') {
            this.employeeDetailObj.modifiedDttm = '';
          } else {
            this.employeeDetailObj.modifiedDttm = new Date(
              this.fetchingEmployeeData.modifiedDttm
            );
          }
        });
    });
  }

  // Intialization of employeedetails
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

  // Submission of the update employeedetails
  submitUpdateEmployeeData() {
    this.employeeDetailObj.dateOfJoining = this.datepipe.transform(
      this.dateOfJoiningValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.dob = this.datepipe.transform(
      this.dobValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.createdDttm = this.datepipe.transform(
      this.createdDttmValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.bloodGroup = this.bloodgroupValue.code;
    this.employeeDetailObj.shift = this.shiftValue.code;
    this.employeeDetailObj.modifiedSource = localStorage.getItem('username');
    this.employeeDetailObj.modifiedSourceType =
      localStorage.getItem('username');
    this.employeeDetailObj.modifiedDttm = this.datepipe.transform(
      new Date(),
      'M/d/yy,  h:mm:ss a'
    );
    this.service.updateEmployeeDeatils(this.employeeDetailObj).subscribe(
      (data) => {
        console.log('data add sucessfully');
      },
      (err) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: err.error.text,
        });
      }
    );
    this.editmode = false;
    this.disabledSubmitCancelButton = false;
    this.disabledEditBackButton = true;
    this.router.navigate(['/EmployeeListScreenTable']);
  }
  // Shift dropdown value matchs
  dropdownShiftValues() {
    if (this.fetchingEmployeeData.shift == 'night') {
      this.shift = [{ name: 'Night', code: 'night' }];
    } else {
      this.shift = [{ name: 'Day', code: 'day' }];
    }
  }

  // Bloodgroup dropdown value matchs
  bloodGroupValue() {
    if (this.fetchingEmployeeData.bloodGroup == 'a') {
      this.bloodGroup = [{ name: 'A', code: 'a' }];
    } else if (this.fetchingEmployeeData.bloodGroup == 'a+') {
      this.bloodGroup = [{ name: 'A+', code: 'a+' }];
    } else if (this.fetchingEmployeeData.bloodGroup == 'b') {
      this.bloodGroup = [{ name: 'B', code: 'b' }];
    } else if (this.fetchingEmployeeData.bloodGroup == 'b+') {
      this.bloodGroup = [{ name: 'B+', code: 'b+' }];
    } else if (this.fetchingEmployeeData.bloodGroup == 'ab') {
      this.bloodGroup = [{ name: 'AB', code: 'ab' }];
    }
  }

  //All inputfileds are coming enable
  editButtonViewmode() {
    this.shift = [
      { name: 'Day', code: 'day' },
      { name: 'Night', code: 'night' },
    ];
    this.bloodGroup = [
      { name: 'A', code: 'a' },
      { name: 'A+', code: 'a+' },
      { name: 'B', code: 'b' },
      { name: 'B+', code: 'b+' },
      { name: 'AB', code: 'ab' },
    ];
    this.editmode = true;
    this.disabledSubmitCancelButton = true;
    this.disabledEditBackButton = false;
  }

  //All inputfileds are coming disable
  disabledInputFields() {
    this.editmode = false;
    this.disabledSubmitCancelButton = false;
    this.disabledEditBackButton = true;
    this.ngOnInit();
  }

  // Navigate to the employeelistscreen
  navigateEmployeeListScreen() {
    this.router.navigate(['/EmployeeListScreenTable']);
  }
}
