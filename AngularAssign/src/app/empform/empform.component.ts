import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api/message';
import { ServicesService } from '../services.service';
import { EmpService } from '../emp.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css'],
})
export class EmpformComponent implements OnInit{
  // calender fileds set max date
  maxDate = new Date();
  // bloodgroup values
  bloodGroup: any;
  // shift values
  shift: any;
  // ngmodel shiftvalue
  shiftValue: any;
  // ngmodel bloodgroupvalue
  bloodgroupValue: any;
  // ngmodel dateofbirth value
  dobValue: any;
  //ngmodel dateofjoining value
  dateOfJoiningValue: any;
  // acces the employee details in service
  employeeDetailObj: EmpService = new EmpService();

  constructor(
    private service: ServicesService,
    private router: Router,
    private datepipe: DatePipe,
    private activatedRoute: ActivatedRoute
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

  ngOnInit() {
    this.employeeDetailsIntialization();
    this.activatedRoute.paramMap.subscribe((parm) => {
      (this.service.employeeId = parm.get('id')?.substring(1)),
        (this.employeeDetailObj.employeeId = this.service.employeeId);
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

  // Submission of the employeedetails
  submitEmployeeData() {
    this.employeeDetailObj.dob = this.datepipe.transform(
      this.dobValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.dateOfJoining = this.datepipe.transform(
      this.dateOfJoiningValue,
      'M/d/yy,  h:mm:ss a'
    );
    this.employeeDetailObj.bloodGroup = this.bloodgroupValue.code;
    this.employeeDetailObj.shift = this.shiftValue.code;
    this.employeeDetailObj.createdSource = localStorage.getItem('username');
    this.employeeDetailObj.createdSourceType = localStorage.getItem('username');
    this.employeeDetailObj.createdDttm = this.datepipe.transform(
      new Date(),
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
    this.router.navigate(['/EmployeeListScreenTable']);
  }

  // Navigate to the Employeelistscreen
  navigateEmpListScreen() {
    this.router.navigate(['/EmployeeListScreenTable']);
  }
}
