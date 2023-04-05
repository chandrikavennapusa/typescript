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
  cols:any;
   constructor(private service:ServicesService , private router:Router){}

   ngOnInit(){
    this.service.gettingDeptdata().subscribe(data => {this.getDeptDetails=data},error => this.errorMessage = error);

    this.cols = [
      { field: 'departmentId', header: 'Department Id' },
      { field: 'departmentName', header: 'Department Name' },
      { field: 'noOfEmployee', header: 'No Of Employee' },
      { field: 'managerId', header: 'Manager Id' },
      { field: 'createdSource', header: 'CreatedSource' },
      { field: 'createdSourceType', header: 'CreatedSourceType' },
      { field: 'createdDttm', header: 'CreatedDttm' },
      { field: 'modifiedSource', header: 'ModifiedSource' },
      { field: 'modifiedSourceType', header: 'ModifiedSourceType' },
      { field: 'modifiedDttm', header: 'ModifiedDttm' },
      { field: 'Actions', header: 'Actions' },
  ];
  
   }
   doubleClick(deptid){
   this.router.navigate(['/DEPTLIST']);
   this.service.deptid=deptid;
  
   }
   
}
