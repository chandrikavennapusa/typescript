import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms3',
  templateUrl: './forms3.component.html',
  styleUrls: ['./forms3.component.css']
})
export class Forms3Component {
 @ViewChild ('fromset') form:NgForm;
  
  hobbies='';
  age: number | undefined;
  skills='';

  conform(){
    console.log(this.form);
    this.hobbies=this.form.value.hobbies;
    this.age=this.form.value.age;
    this.skills=this.form.value.skills;
  //  this.form.reset();
  }
  setdefalutvalues(){
    // this.form.value.hobbies="listening music";
    // this.form.value.age=10;
    // this.form.value.skills="jhrefu"
    this.form.setValue({
      hobbies: "music",
      age:10,
      skills:"java"
    });
  
  
  }
}
