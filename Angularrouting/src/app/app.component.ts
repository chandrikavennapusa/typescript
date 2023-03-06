import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { authservice } from './auth-service';
import { coursegurdservices } from './course-gurd.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularrouting';
  displaysipeer=false;


  login=false;
  constructor(private authservice:authservice,
    private router:Router){}

  login1(){
  this.authservice.login();
  }
  logout(){
    this.authservice.logout();
  }
  ngOnInit(){
    this.router.events.subscribe((eventrouter)=>{
            if( eventrouter instanceof NavigationStart){
              this.displaysipeer=true;
            }
            if(eventrouter instanceof NavigationEnd || eventrouter instanceof NavigationCancel|| eventrouter instanceof NavigationError){
              this.displaysipeer=false;
            }
    })
  }
}


