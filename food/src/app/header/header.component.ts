import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
courses =[
  {id:101,rating:3.5,price:1000,description:"in this course you will learn the fundamental",type:"Free"},
  {id:102,rating:2.5,price:2000,description:"in this course you will learn the fundamental",type:"primimum"},
  {id:103,rating:2,price:3000,description:"in this course you will learn the fundamental",type:"Free"},
  {id:104,rating:2.0,price:4000,description:"in this course you will learn the fundamental",type:"primimum"},
  {id:105,rating:4.5,price:5000,description:"in this course you will learn the fundamental",type:"Free"}
]
getall(){
  return this.courses.length;
}
grtfree(){
  return this.courses.filter(value => value.type === 'Free').length;
}
grtpre(){
  return this.courses.filter(value => value.type === 'primimum').length;
}
dispalyvalue:string="All";

oneventchanes(data:string){
  this.dispalyvalue=data;
  
}
searchvaluep:string='';
searchvalume(data:string){
  this.searchvaluep = data;
  console.log(this.searchvaluep);
}

}
