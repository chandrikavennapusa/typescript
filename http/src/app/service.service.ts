import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, map, Observable, Subject, tap, throwError } from 'rxjs';
import { product } from './model/productss';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  error=new Subject<string>;
  constructor(private httpclient:HttpClient ) { }
 
   //post the data in server
   header= new HttpHeaders({'myheader':'product'});


   productscreate(products:NgForm): Observable<any>{
   return this.httpclient.post('http://localhost:3000/posts',products.value,{headers: this.header})
   }

   //get the data in server
      fetchingdata(){

         let header  = new HttpHeaders({'authentication':'goodperform',
            'contenttype':'111',
            'hero':'super'
        })
        //custom headers
        header =header.set('list-content',"customheaders");

       return  this.httpclient.get('http://localhost:3000/posts',{headers:header}) 
}
//dlete data from server
ondelete(id){

  const params1 = new HttpParams({
    fromObject:{
      id:id,
    }
  });
  
 return this.httpclient.delete('http://localhost:3000/posts/'+id+'',{params:params1})
  
}
//update the server value
updatevalues(id:string,value:product):Observable<any>
{
       // let params = new HttpParams();
  // params = params.append('var1', val1);
  // params = params.append('var2', val2);


  // const params1 = new HttpParams({
  //   fromObject:{
  //     id:id,
  //   }
  // });
 let params1 = new HttpParams();
 params1=params1.append(id,id)
 return this.httpclient.put('http://localhost:3000/posts/'+id+'',value,{params:params1})
}
}
