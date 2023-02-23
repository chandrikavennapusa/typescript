import { Component, ViewEncapsulation ,Input ,OnChanges ,SimpleChanges ,OnInit ,DoCheck ,ContentChild ,ElementRef , AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Comp2Component implements OnChanges , OnInit ,DoCheck {
@Input() value:string="";
constructor(){
  console.log("hello im constructor");
}

ngOnChanges(changes: SimpleChanges ){
  console.log(this.value);
  console.log(changes);
  console.log("hello im onchnages");
}
ngOnInit(): void {
  console.log("hello welcome");
}
ngDoCheck(): void {
  console.log("checked!")
}
ngAfterContentInit(){
console.log(this.contentvalue.nativeElement.textContent);

}

@ContentChild('cont') contentvalue:ElementRef;

}
