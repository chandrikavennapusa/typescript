import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  
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

