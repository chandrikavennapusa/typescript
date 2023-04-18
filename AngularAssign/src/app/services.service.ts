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
  //sharing employeeId
  employeeId = '';
  //sharing departmentId
  departmentId = '';

  //  Check user is exist or not
  checkingUserExistance(UserName: any, password: any) {
    const params = new HttpParams()
      .set('Username', UserName)
      .set('password', password);
    return this.httpclient.get(
      'http://localhost:9091/userAccount/checkuserexists',
      { params: params }
    );
  }

  // Add the employee details
  addingEmployeeInformation(EmployeeForm: any) {
    return this.httpclient.post(
      'http://localhost:9091/employeedetail/addemployee',
      EmployeeForm
    );
  }

  // Fetching the employee details
  fetchingEmployeeDetails() {
    return this.httpclient.get(
      'http://localhost:9091/employeedetail/findallemployees'
    );
  }

  // Delete the employeeid
  deletingEmployeeId(id: any) {
    const params = new HttpParams().set('employeeId', id);
    return this.httpclient.delete(
      'http://localhost:9091/employeedetail/deletebyempid',
      { params: params }
    );
  }

  // Fetching the employee details
  fetchingEmployeeIdDetails(empid: any) {
    const params = new HttpParams().set('employeeId', empid);
    return this.httpclient.get(
      'http://localhost:9091/employeedetail/findbyempid',
      { params: params }
    );
  }

  // Update the employee details
  updateEmployeeDeatils(EmployeeForm: any) {
    return this.httpclient.put(
      'http://localhost:9091/employeedetail/updateemployee',
      EmployeeForm
    );
  }

  //  Add the attendece details
  addAttendanceInformation(form: any) {
    return this.httpclient.post(
      'http://localhost:9091/attendanceDetail/addAttendance',
      form
    );
  }

  // Fetching the departmentdetails
  fetchingDepartmentData() {
    return this.httpclient.get(
      'http://localhost:9091/departmentdetail/findalldepartment'
    );
  }

  // Fetching the department data based on departmentid
  fetchingDepartmentIdDetails(deptid: any) {
    const params = new HttpParams().set('departmentId', deptid);
    return this.httpclient.get(
      'http://localhost:9091/departmentdetail/findDepartmentByEmpId',
      { params: params }
    );
  }

  // Fetching the attendence details
  fetchingAttendenceDetails() {
    return this.httpclient.get(
      'http://localhost:9091/attendanceDetail/findAllAttendance'
    );
  }

  // Update the attendece details
  updateAttendanceDeatils(attendenceform: any) {
    return this.httpclient.put(
      'http://localhost:9091/attendanceDetail/updateAttendance',
      attendenceform
    );
  }

  // Delete the data based on employeeid and departmentid
  deleteBasedOnEmployeeIdDepartmentId(empid: any, deptid: any) {
    const params = new HttpParams()
      .set('employeeId', empid)
      .set('departmentId', deptid);
    return this.httpclient.delete(
      'http://localhost:9091/attendanceDetail/deleteByEmpIdDepId',
      { params: params }
    );
  }

  // Fetching the atendence data beased on Employeeid
  fetchingAttendeDataBasedOnEmployeeId(empid: any) {
    let params = new HttpParams().set('employeeid', empid);
    return this.httpclient.get(
      'http://localhost:9091/attendanceDetail/findAttendanceByEmpId',
      { params: params }
    );
  }
}
