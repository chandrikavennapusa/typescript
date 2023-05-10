import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterfieldsService {

  constructor() { }
  firstName:any='';
  lastName:any='';
  mobileNumber:any='';
  dateOfBirth:any;
  gender:any='';
  username:any='';
}
