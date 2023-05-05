import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent {
 // It is used to the visable the logout p-dialogbox.
 visible: boolean=false;
 // It tells the location of the  logout p-dialogbox.
 position: string='';
  constructor(private el: ElementRef, private renderer:Renderer2,private router:Router, public formbuilder: FormBuilder){}
  

ngAfterViewInit(){
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'overflow-y', 'scroll');
this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'background-color', '#f3f2ef');
}
// It is used to open the logout showDialogbox
showDialog(position: string) {
  this.position = position;
  if(this.visible){
    this.visible=false;
  }
  else{
    this.visible=true;
  }
}
// open to the logout form.
logoutForm(){
  this.router.navigate(['/loginPage'])
  }
  }
