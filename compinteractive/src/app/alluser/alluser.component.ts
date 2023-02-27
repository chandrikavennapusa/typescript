import { Component } from '@angular/core';
import { usernames } from '../services/user.services';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {
  constructor(private name1:usernames){};
  // names: {name:string,age:number,university:string}[]=[];
  names: {name:string,age:number,university:string} ;
  ngOnInit(){
    // this.names=this.name1.name;
    this.name1.submitmethod.subscribe((data:{name:string,age:number,university:string})=>{
      this.names=data;
    })
  }
  
}
