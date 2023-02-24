import { Directive ,ElementRef ,Renderer2,OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlate]'
})
export class HighlateDirective {

  constructor(private element:ElementRef , private rendor:Renderer2) { };

  ngOnInit(){
    this.rendor.setStyle(this.element.nativeElement,'backgroundColor','#00f');
    
  }
  
  @HostListener('mouseenter') onmouseover(){
    this.rendor.setStyle(this.element.nativeElement , 'margin', '20px');
    this.rendor.setStyle(this.element.nativeElement ,'color','red');
  }
  @HostListener ('mouseleave') onmouseout(){
    this.rendor.setStyle(this.element.nativeElement,'margin','10px' )
    this.rendor.setStyle(this.element.nativeElement,'color' , 'black');
  }
}
