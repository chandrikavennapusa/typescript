import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api/message';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private httpclient: HttpClient) {}

  employeeid = '';
  emplyeeid = '';
  EmployeeId = '';
  DepartmentId = '';
  deptid;
  attendenceemployeeid = '';

  checkingUserExistance(UserName, password) {
    const params = new HttpParams()
      .set('Username', UserName)
      .set('password', password);
    return this.httpclient.get(
      'http://localhost:9091/userAccount/checkuserexists',
      { params: params }
    );
  }

  addingEmployeeInformation(EmployeeForm) {
    return this.httpclient.post(
      'http://localhost:9091/employeedetail/addemployee',
      EmployeeForm
    );
  }

  fetchingEmployeeDetails() {
    return this.httpclient.get(
      'http://localhost:9091/employeedetail/findallemployees'
    );
  }

  deletingEmployeeId(id) {
    const params = new HttpParams().set('employeeId', id);
    return this.httpclient.delete(
      'http://localhost:9091/employeedetail/deletebyempid',
      { params: params }
    );
  }

  fetchingEmployeeIdDetails(empid) {
    const params = new HttpParams().set('employeeId', empid);
    return this.httpclient.get(
      'http://localhost:9091/employeedetail/findbyempid',
      { params: params }
    );
  }

  updateEmployeeDeatils(EmployeeForm) {
    return this.httpclient.put(
      'http://localhost:9091/employeedetail/updateemployee',
      EmployeeForm
    );
  }

  addAttendanceInformation(form) {
    return this.httpclient.post(
      'http://localhost:9091/attendanceDetail/addAttendance',
      form
    );
  }

 fetchingDepartmentData() {
    return this.httpclient.get(
      'http://localhost:9091/departmentdetail/findalldepartment'
    );
  }

  fetchingDepartmentIdDetails(deptid) {
    const params = new HttpParams().set('departmentId', deptid);
    return this.httpclient.get(
      'http://localhost:9091/departmentdetail/findDepartmentByEmpId',
      { params: params }
    );
  }

  fetchingAttendenceDetails() {
    return this.httpclient.get(
      'http://localhost:9091/attendanceDetail/findAllAttendance'
    );
  }

  updateAttendanceDeatils(attendenceform) {
    return this.httpclient.put(
      'http://localhost:9091/attendanceDetail/updateAttendance',
      attendenceform
    );
  }

  deleteBasedOnEmployeeIdDepartmentId(empid, deptid) {
    const params = new HttpParams()
      .set('employeeId', empid)
      .set('departmentId', deptid);
    return this.httpclient.delete(
      'http://localhost:9091/attendanceDetail/deleteByEmpIdDepId',
      { params: params }
    );
  }

  
  fetchingAttendeDataBasedOnEmployeeId(empid) {
    let params = new HttpParams().set('employeeid', empid);
    return this.httpclient.get(
      'http://localhost:9091/attendanceDetail/findAttendanceByEmpId',
      { params: params }
    );
  }
}
