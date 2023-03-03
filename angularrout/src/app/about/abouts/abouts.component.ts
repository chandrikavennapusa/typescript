import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent {
constructor(private services:ServicesService, private router:Router,private activated:ActivatedRoute){}
         emp:any;
         empid:any;
         ngOnInit(){
              this.activated.paramMap.subscribe((params)=>{
                this.empid=params.get('id');
                this.emp=this.services.employee.find(x=>x.id == this.empid)
              })
         }
}
