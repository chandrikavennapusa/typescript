import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit{
  // Fecthing deaprtment data
  fetchingDeptDetails: any;
  // error message
  errorMessage: any;
  // containg columns
  cols: any;
  // paginator details
  first = 0;
  // paginator rows
  rows = 10;
  // paginator total records
  totalRecords = 0;
  // paginator rowsperpageoptions
  rowsPerPageOptions = [
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 15', value: 15 },
    { label: 'Show 20', value: 20 },
  ];
  //paginator disbaled
  paginatrDisable:number;
  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit() {
    this.fetchingDepartmentDetails();
    this.columnDetails();
  }

  // paginator details
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.totalRecords = event.totalrecords;
  }

  // columns details
  columnDetails() {
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

  // Fetching Department details
  fetchingDepartmentDetails() {
    this.service.fetchingDepartmentData().subscribe(
      (data) => {
        this.fetchingDeptDetails = data;
       this.paginatrDisable=this.fetchingDeptDetails.length
      },
      (error) => {
        this.errorMessage = error;
      },
      () => {
        console.log('completed');
      }
    );
  }

  // when we double click ,record will be open
  doubleClick(departmentId: any) {
    this.router.navigate(['/DepartmentDetailScreen/:' +departmentId + '']);
    this.service.departmentId = departmentId;
  }
}
