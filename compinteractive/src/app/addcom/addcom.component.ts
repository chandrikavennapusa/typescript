import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { usernames } from '../services/user.services';

@Component({
  selector: 'app-addcom',
  templateUrl: './addcom.component.html',
  styleUrls: ['./addcom.component.css']
})
export class AddcomComponent {
    constructor(private name2: usernames){}
    name : {name:string,age:number,university:string}[]=[];
    ngOnInit(){
        this.name=this.name2.name;
        // this.myobservable.subscribe((val:any)=>console.log(val), 
        this.dataobservable.subscribe((val:any)=>console.log(val),
        (error:any)=>{
            console.log(error.message);
        },
        ()=>{console.log("the program is complete")}
        );
    }
    submitme(name4:{name:string,age:number,university:string}){
     this.name2. savedetais(name4);
    }

//  myobservable=new Observable((observer)=> {        // observable
//  console.log("it is my observable");
//   setTimeout(() => {
//     observer.next("1")
//   }, 1000);
//   setTimeout(()=>{observer.next("2")},1000);

//   // setTimeout(()=>{observer.error(new Error("some thing is wrong please check that one!"))},1000)
//   setTimeout(()=>{observer.complete()},1000);
 
// });
 
// myobservable = Observable.create((observer:any)=>{     // using create method
//   observer.next("A");
//   observer.next("B");
//   // observer.error(new Error("some thing is wrong please check that one!"));
//   observer.next("C")
//   observer.complete("this one is completed");
//   observer.next("D")
// })
 
arr1 =[1,2,3,4];
arr2=["a","b","c","d"];
// myobservable =of(this.arr1,this.arr2,"hello",11,22,"bye")
myobservable = from(this.arr1);
 dataobservable = this.myobservable.pipe(map((val)=>val*5));
  this.myobservable.pipe(filter((val)=> {return val>35}));
}
