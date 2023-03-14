import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  student=[
    {id:1,name:"appi"},
    {id:2,name:"arviond"},
    {id:3,name:"aruna"}
  ]
  getusers(){
    return this.student ;
  }
}
