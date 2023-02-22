import { outputAst } from '@angular/compiler';
import { Component , Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   searchvallue:string='';
   
   @Output()
   serchvalues:EventEmitter<string> = new EventEmitter<string>();
    searchvaluedme(){
      this.serchvalues.emit(this.searchvallue);
      console.log(this.searchvallue);
    }
}
