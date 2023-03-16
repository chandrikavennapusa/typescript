import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('mylogin') form: NgForm;
  userName:string | any;
  password:any;

  login(){
    console.log(this.form.value);
console.log("hello");
  }
}


