import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  constructor(private services:ServicesService, private router:Router,private activated:ActivatedRoute){}
  emp:any;
  empid:any;
  ngOnInit(){
            
           
       this.activated.queryParams.subscribe((params)=>{
        
         this.empid=params['id'];
       this.emp=this.services.employee.find(x => x.id == this.empid);
       
       })
  }
  

}
