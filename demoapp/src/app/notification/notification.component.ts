import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="alert alert-success" [ngClass]="{fadout: dispalyn}"> all cokkies are allowed <button class="close" (click)=clickchane()>x</button></div>',
  styles: ["notification.div{margin:0p x 0px;}" ,".close{float:right;padding-left:20px }",
  ".fadout{visability:hidden;opacity:0;transtion:visability 0s 1s,opacity 2s liner}"
]
})
export class  NotificationComponent{
  dispalyn:boolean=false;
 clickchane(){
this.dispalyn=true;
 }
}
