import { Directive ,Input,TemplateRef , ViewContainerRef  } from '@angular/core';

@Directive({
  selector: '[appStructral]'
})
export class StructralDirective {

  constructor(private template:TemplateRef<any> , private viewtemplate:ViewContainerRef) { }   // custom strucral directive
  
 @Input() set appStructral (condition:boolean){
      if(condition){
        this.viewtemplate.createEmbeddedView(this.template);
      }else{
        this.viewtemplate.clear();
      }
  }

}
