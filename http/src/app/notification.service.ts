import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
   private successmsgsubject = new Subject<string>;
   private errormessagesubject = new Subject<string>;

    suceessmessageaction = this.successmsgsubject.asObservable();
    errormessageaction = this.errormessagesubject.asObservable();
   setsuccessmessge(message:string){
    this.successmsgsubject.next(message);
   }
   seterrormessage(message:string)
  {
    this.errormessagesubject.next(message);
  }
  
   clearsucessmessage(){
    this.setsuccessmessge("");
   }
   clearerrormessage(){
    this. seterrormessage("");
   }
   clearAll(){
    this.clearsucessmessage();
    this.clearsucessmessage();
   }
  }
