import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() eventemit = new EventEmitter();
message="parent to child";

parentchild(){
  this.eventemit.emit(this.message);
}

updatedata(e: any)
{
  this.message=e.target.value;
}

formatedvalue='';
@Input() format=0;
constructor(){

}
ngOnInit(){
  if(this.format <50){
    this.formatedvalue="less than fivty";
  }
  else{
    this.formatedvalue="greter than fivety"
  }
}

}
