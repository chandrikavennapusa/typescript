import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { product } from '../model/productss';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  allproduct:product[];
  constructor(private httpclient:HttpClient){}
    header= new HttpHeaders({'myheader':'product'});


  onProductCreate(products:NgForm){
        console.log(products.value);
        this.httpclient.post<{name:string}>('http://localhost:3000/posts',products.value,{headers: this.header}).subscribe((value)=>{console.log(value);})
  }
  ngOnInit(){
    this.fectingdata();
  }
  OnproductsFecth(){
    this.fectingdata();
   }



  



  private fectingdata(){
    this.httpclient.get<{[key:string]:product}>('http://localhost:3000/posts') .pipe(map((res)=>{
      const product=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          product.push({...res[key] , id: key})
        }
      }
      return product;
    }))
    .subscribe((product)=>{
  
      this.allproduct=product;})
  }
  id1

  ondelteproduct(id){
    this.id1=Number(id)+1;
   console.log(id);
  
    this.httpclient.delete('http://localhost:3000/posts/'+this.id1+'').subscribe();
    console.log(typeof(id))

 }


ondelteproductall(){
  this.httpclient.delete('http://localhost:3000/posts/').subscribe();
 
}
}


