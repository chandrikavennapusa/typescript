import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { ServicesService } from '../services.service';
declare let google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
constructor(private service:ServicesService){}
userscuessloginmessage:Message[];
ngOnInit(){
  this.userscuessloginmessage=this.service.userloginsucessmessage;
}
}
