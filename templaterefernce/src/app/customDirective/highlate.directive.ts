import { Directive ,ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlate]'
})
export class HighlateDirective {

  constructor(element:ElementRef ,rendor:Renderer2) { }

}
