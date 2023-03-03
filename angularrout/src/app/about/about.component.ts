import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   constructor(private Services:ServicesService,private route:Router,private activated:ActivatedRoute){}
    employee:any;
    @Input()
    id1:any;
    
    ngOnInit(){
     this.employee= this.Services.employee;
   
    }
    value(){
      console.log(this.id1)
    }
    queery(){
      this.route.navigate(['/EMP'], {queryParams:{id:this.id1}});
      this.activated.paramMap.subscribe((params)=>{
        this.id1= Number(params.get('id'));
        this.employee=this.Services.employee.find(x => x.id == this.id1);
       
      })
    }
}
