import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
names:[] | any;
  constructor() { }
  getEmployee(){
    this.names =[{id:1,name:"html"},{id:2,name:"css"},{id:3,name:"Java script"}];
    return this.names;
  }

   serialno=[1,2,3,4,5];
   
}
