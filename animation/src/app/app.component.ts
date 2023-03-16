import { style, transition, trigger ,animate,state} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from './services/students.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   animations:
   [
        trigger('openclose',[
          state('open', style({
            height:'200px',
            opacity:1,
            backgroundColor:"yellow"
          })),
          state('closed',style({
            height:'100px',
            opacitiy:0.8,
            backgroundColor:'blue'
          })),
          transition('open => closed',[
            animate(1000)
        ]),
        transition('colsed => open',
        [animate(1000)])
      ])

   ]
})


export class AppComponent implements OnInit {
  title = 'animation';
       constructor(private stud:StudentsService){}

       stud1:{id:number,name:string}[]=[];


  ngOnInit(){
   this.stud1= this.stud.getusers();
   this.myobservable.subscribe((data)=>{
    console.log(data);
   })
  }
           
  isopen:boolean=true;
  eventbinding(){
    document.write("helo world")
  }
  banana:string='';
   students=["happy","sad"];
colorname="blue";
classgreen="ngclass";

show=false;
cdata: any;


   person=
    {name:"chinni",gender:"f"}
   
   wish="hello good morning";
     
    myobservable = new Observable((observe)=>{
      console.log("subscribtion is started");
      observe.next(1);
      observe.complete();
    });
      promise = new Promise((resolve,reject)=>{
        console.log("promise is started");
      })


  toggle(){
  this.isopen=false;
  console.log(this.isopen)
  }
  isdisable=true;
}



