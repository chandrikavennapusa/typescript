import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendecelistComponent } from './attendecelist/attendecelist.component';
import { AttendenceformComponent } from './attendenceform/attendenceform.component';
import { DepartmentComponent } from './department/department.component';
import { DeptdetaillistComponent } from './deptdetaillist/deptdetaillist.component';
import { EmpformComponent } from './empform/empform.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanactivateService } from './canactivate.service';
import { CanActivateServiceService } from './can-activate-service.service';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'HOME', canActivate: [CanactivateService], component: HomeComponent },
  {
    path: 'EmployeeListScreenTable',
    canActivate: [CanactivateService],
    component: EmployeeComponent,
  },
  {
    path: 'EmployeeDetailFormScreen/:employeeId',
    canActivate: [CanactivateService],
    component: EmplistComponent,
  },
  {
    path: 'EmployeeDetailScreen/:employeeId',
    canActivate: [CanactivateService],
    component: EmpformComponent,
  },
  {
    path: 'DepartmentListScreenTable',
    canActivate: [CanActivateServiceService],
    component: DepartmentComponent,
  },
  {
    path: 'DepartmentDetailScreen/:departmentId',
    canActivate: [CanActivateServiceService],
    component: DeptdetaillistComponent,
  },
  {
    path: 'AttendenceListScreenTable',
    canActivate: [CanactivateService],
    component: AttendanceComponent,
  },
  {
    path: 'AttendenceDetailTableScreen/:employeeId/:departmentId',
    canActivate: [CanactivateService],
    component: AttendecelistComponent,
  },
  {
    path: 'AttendenceDetailScreen/:employeeId',
    canActivate: [CanactivateService],
    component: AttendenceformComponent,
  },
  { path: '**', canActivate: [CanactivateService], component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
