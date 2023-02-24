import { Directive, ElementRef, Renderer2 ,OnInit, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDcoration]'
})
export class DcorationDirective {

  constructor(private Element:ElementRef , private rendor:Renderer2) { }



}
