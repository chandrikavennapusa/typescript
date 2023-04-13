import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-deptdetaillist',
  templateUrl: './deptdetaillist.component.html',
  styleUrls: ['./deptdetaillist.component.css'],
})
export class DeptdetaillistComponent {
  departmentId = '';
  departmentName = '';
  noOfEmployee = '';
  managerId = '';
  createdSource = '';
  createdSourceType = '';
  createdDttm = '';
  modifiedSource = '';
  modifiedSourceType = '';
  modifiedDttm = '';
  editmode = false;
  fetchingDeptData: any;
  constructor(
    private service: ServicesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((parm) => {
      this.service.deptid = parm.get('id')?.substring(1);

      this.service
        .fetchingDepartmentIdDetails(this.service.deptid)
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

  navigateDeptListScreen() {
    this.router.navigate(['/DEPT']);
  }
}
