import { Component } from '@angular/core';
import { authservice } from './auth-service';
import { coursegurdservices } from './course-gurd.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularrouting';

  login=false;
  constructor(private authservice:authservice){}

  login1(){
  this.authservice.login();
  }
  logout(){
    this.authservice.logout();
  }
  
}


