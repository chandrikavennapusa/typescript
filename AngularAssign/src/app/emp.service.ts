import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor() {}
  employeeId = '';
  firstName = '';
  lastName = '';
  gender = '';
  dob: any;
  mailId = '';
  phoneNumber = '';
  bloodGroup = '';
  address = '';
  department = '';
  dateOfJoining: any;
  salary = '';
  shift = '';
  createdSource = '';
  createdSourceType = '';
  createdDttm: any;
  modifiedSource = '';
  modifiedSourceType = '';
  modifiedDttm: any;
}
