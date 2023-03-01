import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoureserviceService } from 'src/app/service/coureservice.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    constructor(private activeroute:ActivatedRoute , private courseservice:CoureserviceService){}
    courses:any;
    courseid:any;
   ngOnInit(){
  //  this.courseid=this.activeroute.snapshot.paramMap.get('id');
   this.courseid=this.activeroute.snapshot.params['id'];
   console.log(this.courseid);
   this.courses=this.courseservice.coursearray.find( x=> x.id == this.courseid);
   console.log(this.courses);
   }
}
