import { Component } from '@angular/core';
import { CoureserviceService } from '../service/coureservice.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
    constructor(private courseservie:CoureserviceService){}
    courses1:any;
    ngOnInit(){
        this.courses1 = this.courseservie.coursearray;
    }
}

  
