import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-deptdetaillist',
  templateUrl: './deptdetaillist.component.html',
  styleUrls: ['./deptdetaillist.component.css'],
})
export class DeptdetaillistComponent implements OnInit {
  // ngmodel departmentId
  departmentId = '';
  // ngmodel departmentName
  departmentName = '';
  // ngmodel noOfEmployee
  noOfEmployee = '';
  // ngmodel managerId
  managerId = '';
  // ngmodel createdSource
  createdSource = '';
  // ngmodel createdSourceType
  createdSourceType = '';
  // ngmodel reatedDttm
  createdDttm = '';
  // ngmodel modifiedSource
  modifiedSource = '';
  // ngmodel modifiedSourceType
  modifiedSourceType = '';
  // ngmodel modifiedDttm
  modifiedDttm = '';
  // All inputfileds are disabled
  editmode = false;
  // fetching department data
  fetchingDeptData: any;

  constructor(
    private service: ServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fethingDepartmentData();
  }

  // Fetching department details
  fethingDepartmentData() {
    this.activatedRoute.paramMap.subscribe((parm) => {
      this.service.departmentId = parm.get('id')?.substring(1);
      this.service
        .fetchingDepartmentIdDetails(this.service.departmentId)
        .subscribe((data) => {
          this.fetchingDeptData = data;
          this.departmentId = this.fetchingDeptData.departmentId;
          this.departmentName = this.fetchingDeptData.departmentName;
          this.noOfEmployee = this.fetchingDeptData.noOfEmployee;
          this.managerId = this.fetchingDeptData.managerId;
          this.createdSource = this.fetchingDeptData.createdSource;
          this.createdSourceType = this.fetchingDeptData.createdSourceType;
          this.createdDttm = this.fetchingDeptData.createdDttm;
          this.modifiedSource = this.fetchingDeptData.modifiedSource;
          this.modifiedSourceType = this.fetchingDeptData.modifiedSourceType;
          this.modifiedDttm = this.fetchingDeptData.modifiedDttm;
        }),
        (err: any) => {
          console.log(err.error);
        },
        () => {
          console.log('complete');
        };
    });
  }

  // Navigate to the employeedetailscreen
  navigateDeptListScreen() {
    this.router.navigate(['/DepartmentListScreenTable']);
  }
}
