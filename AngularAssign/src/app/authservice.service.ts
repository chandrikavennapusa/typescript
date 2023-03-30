import { Injectable } from '@angular/core';

export class AuthserviceService {
  loogedIn:boolean=false;
  login(){
      this.loogedIn=true;
  }
  logout(){
      this.loogedIn=false;
  }
  IsAutheticated(){
      return this.loogedIn;
  }
}
