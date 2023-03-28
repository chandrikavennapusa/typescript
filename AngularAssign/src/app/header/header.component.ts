import { Component } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private service:ServicesService){}
employeeuserhide=true;
  
  ngOnInit(){
    let username =localStorage.getItem("username");
     if(username == "employee" ){
      this.employeeuserhide=false; 
  }

 
 }

}
