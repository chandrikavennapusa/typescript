import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  list=[
    {telugu:30,name:"alen",gender:"female",dob:new Date('11-30-1999')},
    {telugu:20,name:"bob",gender:"male",dob:new Date('07-29-1999')},
    {telugu:25,name:"calen",gender:"female",dob:new Date('01-30-1999')},
    {telugu:98,name:"domy",gender:"male",dob:new Date('11-30-1889')},
    

  ];
  tottalmarks=[100];
}
