import { Component, OnInit } from '@angular/core';
import { Loggeruser } from './services/logger.service';
import { Userservice } from './services/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  title = 'UserService';
  constructor( private userser:Userservice ){}

  user:{name:string,status:string}[]=[];
ngOnInit(){
   this.user = this.userser.users;
  
}


}
