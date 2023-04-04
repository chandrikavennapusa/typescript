import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private service:ServicesService ,private router:Router){}
employeeuserhide=true;

  ngOnInit(){
    let username =localStorage.getItem("username");
     if(username == "employee" ){
      this.employeeuserhide=false; 
  }
 }
 islogout(){
  localStorage.setItem('empbooleanvalue',"false");
        this.router.navigate(['/Login']);
 }
}
