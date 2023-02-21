import { Component } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent { 
  products=[
  {id:1,name:"books",collage:"yvu",avalible:"avalible"},
  {id:2,name:"friuts",collage:"rayalasima",avalible:"notavaliable"},
  {id:3,name:"vegetables",collage:"svu",avalible:"avalible"},
  {id:4,name:"flesh",collage:"sku",avalible:"not avaliable"}
]
}
