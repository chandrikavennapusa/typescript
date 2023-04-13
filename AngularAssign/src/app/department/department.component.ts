import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent {
  fetchingDeptDetails: any;
  errorMessage: any;
  cols: any;
  first2: number = 0;
  rows2: number = 10;
  totalrecords = 0;
  constructor(private service: ServicesService, private router: Router) {}

  rowsPerPageOptions = [
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];
  onPageChange(event: any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
    this.totalrecords = event.totalrecords;
  }
  ngOnInit() {
    this.service.fetchingDepartmentData().subscribe(
      (data) => {
        this.fetchingDeptDetails = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );

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
    ];
  }

  doubleClick(deptid: any) {
    this.router.navigate(['/DEPTLIST/:' + deptid + '']);
    this.service.deptid = deptid;
  }
}
