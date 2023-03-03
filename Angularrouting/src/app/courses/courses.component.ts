import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoureserviceService } from '../service/coureservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    constructor(private courseservie:CoureserviceService,private activated:ActivatedRoute){}
    courses1:any;
    ngOnInit(){
        // this.courses1 = this.courseservie.coursearray;
        //  this.courseservie.getcourseget().then((data:any)=>
        //  this.courses1=data
        //  )
        this.courses1 = this.activated.snapshot.data['corses'];
  
    }
}

  
