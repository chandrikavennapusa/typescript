
import { Directive ,ElementRef ,Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {

  constructor(private element:ElementRef , private rendor:Renderer2) { }

     @Input() set appHighlite (condition:boolean){
        if(condition){
          this.rendor.addClass(this.element.nativeElement , 'container3' )
        }
     }
}
