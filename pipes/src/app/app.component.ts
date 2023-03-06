import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  list: any;
  totalmarks:any;
  _filterTtest:string='';
  filterlist:any;
                                           totallist=new Promise((resolve,reject)=>{
                                            setTimeout((_value: any) => {
                                              resolve(this.filterlist.length);
                                            }, 2000);
                                           })

  get  filterTtest(){
    return this._filterTtest;
  }
  set filterTtest(value:string){
    this._filterTtest=value;
   this.filterlist= this.filterlistbygender(value);
  }
 


  constructor(private lists:ListService){}
  ngOnInit(){
    this. list=this.lists.list;
  this.totalmarks=  this.lists.tottalmarks;
  this.filterlist=this.list;
  console.log("ngoninit called");

  }
  
 
  addlist(){
    // let sublistcopy = Object.assign([],this.list);
    // sublistcopy.push({telugu:70,name:"xerox",gender:"female"});
    // this.list=sublistcopy;
    this.list.push({telugu:70,name:"xerox",gender:"female"});
    this.filterlist= this.filterlistbygender(this._filterTtest);
  }
  changelist(){
    // let sublistcopy = Object.assign([],this.list);
    // sublistcopy[0].gender='male';
    // this.list = sublistcopy;
    this.list[0].gender='male';
    this.filterlist= this.filterlistbygender(this._filterTtest);
    
  }
  mouseoverOn(){
    console.log("the impure pipe is called!")
  }
        filterlistbygender(filterterm:string){
          if(this. list.length === 0 ||this.filterTtest === ''){
            return this.list
            }
          else{
           return this. list.filter((lists:any)=>{
          return lists.gender.toLowerCase() === filterterm.toLowerCase();
         }
       ) }
}
}