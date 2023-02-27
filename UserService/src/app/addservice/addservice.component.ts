import { Component ,OnInit} from '@angular/core';
import { Userservice } from '../services/service';
import { Loggeruser } from '../services/logger.service';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {


  useraddname:string='';
useraddactive:string='active';
constructor( private useradd:Userservice){}
ngOninit(){
 
}
Adduser(){
  this.useradd.Addusers(this.useraddname , this.useraddactive);
 
}
}
