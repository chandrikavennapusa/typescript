import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import { canDeactivated } from '../deactivate.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  frist;
  second;
  age;

  candeactivate(){
   
    if(this.frist== undefined|| this.second == undefined || this.age== undefined){
      return confirm('doyou want change the page?');
       }else{
        return true;
       }
  }


 

}
