import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viewchild';
   @ViewChild('dateof')  dateof:ElementRef;
   @ViewChild('ageele')  age:ElementRef;

   getage(){
    let dob = new Date(this.dateof.nativeElement.value).getFullYear();
    let currentdate = new Date().getFullYear();
    let age:number = currentdate - dob;
    this.age.nativeElement.value =age;
   }
}
