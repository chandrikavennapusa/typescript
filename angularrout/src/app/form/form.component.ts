import { Component } from '@angular/core';
import { isDeactivate } from '../deactivated.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements isDeactivate {
  name;
  surname;
  place;

  Deactivatedas(){
    console.log(this.name);
    if(this.name==undefined|| this.surname==undefined || this.place==undefined){
      return confirm("do you want to cahnge the page?");
    }
    else{
      return true;
    }
  }
}
