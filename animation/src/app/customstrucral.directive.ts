import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstrucral]'
})
export class CustomstrucralDirective {

  constructor( e:ElementRef) { 
    e.nativeElement.style.color="red";
  }
   
}
