import { Component,AfterContentInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { CoureserviceService } from 'src/app/service/coureservice.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
 
    constructor(private activeroute:ActivatedRoute , private courseservice:CoureserviceService ,private router :Router){}
    courses:any;
    courseid:any;
    subscriberoute:any;
   ngOnInit(){
  //  this.courseid=this.activeroute.snapshot.paramMap.get('id');
  //  this.courseid=this.activeroute.snapshot.params['id'];
  //  console.log(this.courseid);
  //  this.courses=this.courseservice.coursearray.find( x=> x.id == this.courseid);
  //  console.log(this.courses);
     this.subscriberoute=this.activeroute.paramMap.subscribe((params)=>{
      this.courseid=params.get('id');
      this.courses=this.courseservice.coursearray.find(x => x.id == this.courseid);

      this.activeroute.queryParamMap.subscribe(
        (param)=> this.editable=Boolean(param.get('edit'))
        )
     })
    

   }

   
   ngOnDestroy(){
    this.subscriberoute.unSubscribe();
   }
   editable:boolean=false;
   editname(){
    this.router.navigate(['/coures/course',this.courseid],{queryParams:{edit:true}})
   
   }
  
}
