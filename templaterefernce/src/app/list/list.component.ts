import { Component } from '@angular/core';
import { customer } from './list';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  selectedvalue:any;
 customers:customer[]=[
  {customerNo:1,name:"anne",  address:'',city:'landon' , country:"uk"},
  {customerNo:2,name:"bandar", address:'',city:'america' , country:"usa"},
  {customerNo:3,name:"anne", address:'',city:'iropa' , country:"up"},
  {customerNo:4,name:"anne", address:'',city:'kanda' , country:"ap"},
  {customerNo:5,name:"anne", address:'',city:'hindi' , country:"ja"}
 ]
}
