import { group } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
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
export class PostComponent implements OnDestroy {
  allproduct:product[];
  isfecthing:boolean=true;
  errsubscription:Subscription;

  constructor(private httpclient:HttpClient, private service:ServiceService , private notificationservice:NotificationService){}
  
  
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
   
@ViewChild('productform') form:NgForm;
    cuurentid;

    
  onProductCreate(products:NgForm){                              // form save json data created
    if(!this.editmode){
        this.service.productscreate(products)
    }else{
      this.service.updatevalues(this.cuurentid,products.value);
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
    this.service.fetchingdata().subscribe((data)=>{
      this.allproduct=data
    },(err)=>{
      this.errormessage=err.message
    });
  }

   
  ondelteproduct(id){                                             //delete json server based on id
 this.service.ondelete(id); 
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


  setsucessfullmessage=this.notificationservice. suceessmessageaction.pipe(tap (message=>{
    setTimeout(() => {
      this.notificationservice.clearAll();
    }, 2000);
  }))

 
  seterrmessage=this.notificationservice.errormessageaction.pipe(tap (message=>{
    setTimeout(() => {
      this.notificationservice.clearAll();
    }, 2000);
  }));
}


