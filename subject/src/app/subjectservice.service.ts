import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectserviceService {

  constructor() {
    this.replayValue.next("this.task");
    this.replayValue.next("hello");
    this.replayValue.next("hii");
    this.replayValue.next("this.task");
   }
   task = [
    'task1','task2','task3'
   ]
   // subject 
     
     taskValue = new Subject();
     
     addvalue(){
      this.taskValue.next(this.task);
     }
     
     subjectNext(subValue:any){
      this.task.push(subValue);
     }

    
   // behaviouaral subject
   behaviouraltaskvalue =  new BehaviorSubject(this.task);

   behaviouraladdvalue(bevalue:any){
   this.task.push(bevalue)
   }

 // replay subject

 replayValue =  new ReplaySubject(2);
 
 
 


}
