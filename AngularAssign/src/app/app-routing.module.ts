import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendecelistComponent } from './attendecelist/attendecelist.component';
import { DepartmentComponent } from './department/department.component';
import { DeptdetaillistComponent } from './deptdetaillist/deptdetaillist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'HEADER',component:HeaderComponent},
  {path:'HOME',component:HomeComponent},
  {path:'EMP',component:EmployeeComponent},
  {path:'DEPT',component:DepartmentComponent},
  {path:'DEPTLIST', component:DeptdetaillistComponent},
  {path:'ATDE',component:AttendanceComponent},
  {path:'ATDELIST',component:AttendecelistComponent},
  {path:'EMPLIST',component:EmplistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
