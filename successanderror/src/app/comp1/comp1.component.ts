import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  fristname:string='';
      message:string='';
  submitted(){
    console.log(this.fristname);

    this.notifiction.setsuccessmessage(this.fristname);
    
  }
  constructor(private notifiction:NotificationService){}
  
}
