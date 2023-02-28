import { Component } from '@angular/core';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
constructor(private empservice:EmpserviceService){}
emplist:[]|any;
ngOnInit(){
  this.emplist = this.empservice.getEmployee();
}
}
