import { Directive ,ElementRef, Renderer2 , Input} from '@angular/core';

@Directive({
  selector: '[appAdddirec]'
})
export class AdddirecDirective {

  constructor(private element:ElementRef , private rendor:Renderer2){
  }

  @Input('appAdddirec') set backcolor(value:object){
    let entity = Object.entries(value);
    console.log(entity);
    for(let[classname ,condition] of entity){
      if(condition){
        this.rendor.addClass(this.element.nativeElement , classname);
      }
    }
  }

  

}
