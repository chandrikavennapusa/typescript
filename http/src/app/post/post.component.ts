import { group } from '@angular/animations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, Subscription, tap } from 'rxjs';
import { __values } from 'tslib';
import { product } from '../model/productss';
import { ServiceService } from '../service.service';
import { OnDestroy } from '@angular/core';
import { NotificationService } from '../notification.service';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnDestroy ,OnInit{
  [x: string]: any;
  allproduct:product[];
  isfecthing:boolean=true;
  errsubscription:Subscription;

  constructor(private httpclient:HttpClient, private service:ServiceService , private notifictionservice:NotificationService){}
  
  
  
  
   
@ViewChild('productform') form:NgForm;
    cuurentid;

    
  onProductCreate(products:NgForm){                              // form save json data created
    if(!this.editmode){
        this.service.productscreate(products)
        .pipe(tap(post => { this.notifictionservice.setsuccessmessge("suceessfully added");}),
        map(res => 
          this.allproduct =res
          )
        ) .subscribe()
       
    }else{
      this.service.updatevalues(this.cuurentid,products.value) 
      .pipe(tap(post => { this.notifictionservice.setsuccessmessge("suceessfully updated");})).subscribe();  ;
    }
  }


 


  ngOnInit(){
    this.fectingdata();
    this.service.error.subscribe((message)=>{this.errormessage=message})
  }


 OnDestroy(){
   this.errsubscription.unsubscribe();
 }



      
  OnproductsFecth(){
    this.fectingdata();
   }
  private fectingdata(){
    this.isfecthing=false;
    this.service.fetchingdata().pipe(map((res)=>{
      const product=[];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          product.push({...res[key]})
        }
      }
      return product;
    })
  ).subscribe((data)=>{
      this.allproduct=data
    },(err)=>{
      this.errormessage=err.message
    });
  }






  





   
  ondelteproduct(id){                                             //delete json server based on id
 this.service.ondelete(id).pipe(tap(post => { this.notifictionservice.setsuccessmessge("delete suceesfully");}))
 .subscribe();; 
 }

errormessage;
ondelteproductall(){
  this.httpclient.delete('http://localhost:3000/posts').subscribe();
   
  
 
}


editmode:boolean=false;                                                   // update the data
updatevalues(id:string){
  this.cuurentid=id;
  let currentedit=  this.allproduct.find((p)=>{return  p.id === id});

this.form.setValue({
    fullname:currentedit.fullname,
    age:currentedit.age,
    group:currentedit.group
   
  })
    this.editmode=true;
  }


  setsucessfullmessage=this.notifictionservice. suceessmessageaction.pipe(tap (message=>{
    setTimeout(() => {
      this.notifictionservice.clearAll();
    }, 2000);
  }))

 
  seterrmessage=this.notifictionservice.errormessageaction.pipe(tap (message=>{
    setTimeout(() => {
      this.notifictionservice.clearAll();
    }, 2000);
  }));





  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}


