import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(private route :Router , private actived:ActivatedRoute){}
    gohome(){
      // this.route.navigate(['/HOME']);
      this.route.navigate(['/HOME'],{relativeTo:this.actived});
      // this.route.navigateByUrl("HOME");
    }
}


