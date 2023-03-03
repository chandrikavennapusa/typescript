import { Component } from '@angular/core';
import { Authenticate } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularrout';
    constructor(private authser:Authenticate){}
  login(){this.authser.login()}
  logout(){this.authser.logout()}
}
