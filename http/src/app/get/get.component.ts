import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {
  data:any;
  constructor(private http:HttpClient){}

  ngOnInit(){
  }
  getdata(){
    this.http.get('http://localhost:3000/posts').subscribe((value)=>{this.data=value})
  }
}
