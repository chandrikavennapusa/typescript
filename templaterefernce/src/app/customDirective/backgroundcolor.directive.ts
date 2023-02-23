import {Directive ,OnInit , ElementRef} from '@angular/core';
@Directive({
    selector:'[background]'
})
export class setbackgroundcolor {
   private bacolor:ElementRef;
   constructor(elemnt:ElementRef){
            this.bacolor=elemnt;
   
   }
   ngOnInit(){
    this.bacolor.nativeElement.style.backgroundColor="green";
    this.bacolor.nativeElement.style.color="white";
    this.bacolor.nativeElement.style.fontsize="25px";
   }
}