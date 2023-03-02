import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoureserviceService } from '../service/coureservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(private route :Router , private actived:ActivatedRoute ,private service:CoureserviceService){}
    gohome(){
      // this.route.navigate(['/HOME']);
      this.route.navigate(['/HOME'],{relativeTo:this.actived});
      // this.route.navigateByUrl("HOME");
    }
   
    value:string='';
    ngOnInit(){
     
    }
    querypar(){
        this.route.navigate(['/About'],{queryParams:{name:this.value}});
       
    }
    
    routerpar(){
      this.route.navigate(['/About',this.value]);
      
    }
  
}


