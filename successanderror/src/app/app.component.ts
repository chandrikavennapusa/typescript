import { Component } from '@angular/core';
import { from, Observable, observable, of, Subscriber } from 'rxjs';
import { NotificationService } from './service/notification.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NotificationService]
})
export class AppComponent {
title = 'successanderror';

  constructor(private notificationservice:NotificationService){
    
  }
     
}
