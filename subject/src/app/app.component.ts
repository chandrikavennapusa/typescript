import { Component, OnInit } from '@angular/core';
import { SubjectserviceService } from './subjectservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'subject';
  constructor(private subjcetservice:SubjectserviceService){}
  ngOnInit(): void {
   this.subjectMethod();
   this.behaviourMethod();
   this.replayMethod();
   // we can call nest method that time only subject method is executed.
   this.subjcetservice.addvalue();
  }


   subjectMethod(){
    this.subjcetservice.taskValue.subscribe(
      data=>{console.log(data)},
      err =>{console.log("error message")},
      ()=>{console.log("suceesfully")}
     );
     this.subjcetservice.subjectNext("task4");
   }

   behaviourMethod(){
    this.subjcetservice.behaviouraltaskvalue.subscribe(
      data=>{console.log(data)},
      err =>{console.log("error message")},
      ()=>{console.log("suceesfully")}
     );
     this.subjcetservice.behaviouraladdvalue('task4')
   }
  
   replayMethod(){
    this.subjcetservice.replayValue.subscribe(
      data=>{console.log(data)},
      err =>{console.log("error message")},
      ()=>{console.log("suceesfully")}
    );
   
   }
}
