import { Component ,ViewEncapsulation ,Input}  from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'templaterefernce';

  inputname:string="";
  @Input() oninputname(data:HTMLInputElement){
    this. inputname=data.value;
  }


}
