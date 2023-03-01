import { Component ,OnDestroy} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  fristname:string ='';
  
  constructor(private notificationservice:NotificationService){
    
  }
   ngOnInit(){
    
    this.notificationservice.successmessageaction.subscribe(
      (val:string)=>
    this.fristname=val,
    )
    this.data.subscribe(
      (_data1: any)=>{console.log(_data1)},
      (err:any)=>{console.log(err)},
      ()=>{console.log("completeed!")}
      
      )
      this.interval1= this.intervall.subscribe((data)=>{console.log(data)});

      
   }
   intervall = interval(1000);
interval1:any;
unsub(){
  this.interval1.unsubscribe();
}
          data = Observable.create((_observer: any) =>{
            let count=0;
        setInterval(()=>{
          _observer.next(count);
          if(count == 5){_observer.complete()}
          if(count > 5 ){
            _observer.error(new Error('count is greater then 3'))          }
          count++;
        },1000)
            
})

}









