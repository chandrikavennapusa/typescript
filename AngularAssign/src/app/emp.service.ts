import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  employeeId='';
  firstName='';
  lastName='';
  gender='';
  dob;
  emailId='';
  phoneNumber='';
  BloodGroup='';
  address='';
  Department='';
  dateOfJoining;
  salary='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm;
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm;
}
