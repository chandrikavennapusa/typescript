import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  fristname:string ='';
  messageToShow:String='';
  constructor(private notificationservice:NotificationService){
    
  }
   ngOnInit(){
    
    this.notificationservice.successmessageaction.subscribe(
      (val:string)=>
    this.fristname=val,
    )
   }
}
