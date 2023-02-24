import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRen]'
})
export class RenDirective {

  constructor(private element:ElementRef ,private rendor:Renderer2) { }
@Input()
defaultcolor:string='transparent';
@Input('appRen')
defalutborder:string='none';


@HostBinding ('style.backgroundColor') background:string=this.defaultcolor;
@HostBinding ('style.border') border:string='5px double red';
@HostBinding ('style.border-shadow') bordercolor:string = 'green';

ngOnInit(){
this.background=this.defaultcolor;
}
@HostListener('mouseover') onmouseover(){
  this.background="orange";
  // this.rendor.setStyle(this.element.nativeElement , 'backgroundColor','orange');
  // this.rendor.setStyle(this.element.nativeElement,'border','2px solid black')
}
@HostListener('mouseleave') onmouseout(){
  this.background=this.defaultcolor;
  // this.rendor.setStyle(this.element.nativeElement,'backgroundColor','pink');
  // this.rendor.setStyle(this.element.nativeElement,'border','5px double red');
}
}
