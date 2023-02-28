import { Component } from '@angular/core';
import { EmpserviceService } from './empservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  constructor(private empservice:EmpserviceService){}
  employee:[]|any;
  ngOnInit(){
    this.employee =this.empservice.getEmployee();
  }
}
