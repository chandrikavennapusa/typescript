import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  getDeptDetails;
  errorMessage: any;
   constructor(private service:ServicesService , private router:Router){}

   ngOnInit(){
    this.service.gettingDeptdata().subscribe(data => {this.getDeptDetails=data},error => this.errorMessage = error);
  
   }
   doubleClick(rowData){
   this.router.navigate(['/DEPTLIST']);
   this.service.setdeptData(rowData);
   }
   
}
