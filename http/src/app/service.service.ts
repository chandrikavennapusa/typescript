import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { product } from './model/productss';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
error=new Subject<string>;
  constructor(private httpclient:HttpClient , private notifictionservice:NotificationService) { }
 
   //post the data in server
   header= new HttpHeaders({'myheader':'product'});


   productscreate(products:NgForm){
    console.log(products.value);
    this.httpclient.post<{name:string}>('http://localhost:3000/posts',products.value,{headers: this.header}).pipe(tap(post => { this.notifictionservice.setsuccessmessge("suceessfully added");}))
    .subscribe(
      (value)=>{console.log(value);},
      (err)=> this.error.next(err.message)
      )
   }

   //get the data in server
      fetchingdata(){
       return  this.httpclient.get<{[key:string]:product}>('http://localhost:3000/posts') .pipe(map((res)=>{
      const product=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          product.push({...res[key]})
        }
      }
      return product;
    }),catchError( (err)=>{return throwError(err)} )
    )
    
}
//dlete data from server
ondelete(id){
  this.httpclient.delete('http://localhost:3000/posts/'+id+'')
  .pipe(tap(post => { this.notifictionservice.setsuccessmessge("delete suceesfully");}))
  .subscribe();
}
//update the server value
updatevalues(id:string,value:product)
{
 this.httpclient.put('http://localhost:3000/posts/'+id+'',value)
 
 .pipe(tap(post => { this.notifictionservice.setsuccessmessge("suceessfully updated");})).subscribe();  
}
}
