import { Input } from '@angular/core';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCngif]'
})
export class CngifDirective {

  constructor(private html :TemplateRef<any>,private container :ViewContainerRef) { }
 @Input() set appCngif(cond:boolean){
 if(cond){
  this.container.createEmbeddedView(this.html)
 }
 else{
  this.container.clear();
 }
 }
}
