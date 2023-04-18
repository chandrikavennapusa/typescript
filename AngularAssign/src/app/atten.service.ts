import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttenService {
  constructor() {}
  employeeId = '';
  date: any;
  departmentId = '';
  available = '';
  checkIn: any;
  checkout: any;
  attendanceCount = '';
  shift = '';
  createdSource = '';
  createdSourceType = '';
  createdDttm: any;
  modifiedSource = '';
  modifiedSourceType = '';
  modifiedDttm: any;
}
