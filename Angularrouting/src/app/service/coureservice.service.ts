import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoureserviceService {

  constructor() { }

  coursearray=[
    {id:101,name:"kamal",university:"yvu",price:1000},
    {id:102,name:"bob",university:"sku",price:2000},
    {id:103,name:"alen",university:"sv",price:3000},
    {id:104,name:"jarkand",university:"ru",price:4000},
  ]
}
