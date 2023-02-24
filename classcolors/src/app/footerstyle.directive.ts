import { Directive ,ElementRef , Renderer2 ,Input} from '@angular/core';

@Directive({
  selector: '[appFooterstyle]'
})
export class FooterstyleDirective {

  constructor(private element:ElementRef,private rendor:Renderer2) { }
  @Input('appFooterstyle') set styleset(value:object){
      let entry = Object.entries(value);
      console.log(entry);
      for(let [e,f]  of entry){
       this.rendor.setStyle(this.element.nativeElement , e,f);
      }
  } 

}
