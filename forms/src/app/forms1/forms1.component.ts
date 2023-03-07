import { Component } from '@angular/core';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component {
  onsubmit(forms:any){
    console.log(forms)
  }
  defalut='html';
  
    defalutgender='female'

  gender=[{id:1,value:"female"},
  {id:2,value:"male"},
  {id:3,value:"others"}
]
}
