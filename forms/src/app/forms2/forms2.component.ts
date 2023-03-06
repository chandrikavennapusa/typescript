import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component {
  defalutvalue='css';
  onSubmit(form:NgForm){
    console.log(form)
  }
}
