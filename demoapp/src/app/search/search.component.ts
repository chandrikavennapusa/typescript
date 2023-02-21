import { Component ,OnInit} from '@angular/core';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
searchvalue:string='';
changes(e:Event){
  // console.log((<HTMLInputElement>e.target).value);
  this.searchvalue=(<HTMLInputElement>e.target).value;
}

}
