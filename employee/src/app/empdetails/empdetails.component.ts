import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {
constructor(private empservice:EmpserviceService){}
empdetails:[] |any ;
serailno:[]|any;
myobservable:any;
transform:any;
ngOnInit(){
 this.empdetails  = this.empservice.getEmployee();                                     // injectable

 this.serailno=this.empservice.serialno;
 console.log(this.serailno);

 this.myobservable = from(this.serailno).subscribe((val)=>{console.log(val)},(err)=>{console.log("this.is error")});
this.myobservable=from(this.serailno).pipe(filter((val:any)=> {return val >2 }));                                                 // observable
this.myobservable.subscribe((val:any)=>{
  setTimeout(() => {
    console.log(val);
  }, 2000);
});
this.transform =from(this.serailno).pipe(map ((val:any) =>{return val*10},
// filter((val:any)=>{return val<2})
));
this.transform.subscribe((val:any)=>{
  console.log(val);
})

}


}
