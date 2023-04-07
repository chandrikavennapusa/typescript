import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttenService {

  constructor() { }

  employeeId='';
  date;
  departmentId='';
  available='';
  available1='';
  checkIn;
  checkout;
  attendanceCount='';
  shift='';
  createdSource='';
  createdSourceType='';
  createdDttm;
  modifiedSource='';
  modifiedSourceType='';
  modifiedDttm;
}
