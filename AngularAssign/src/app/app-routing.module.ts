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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanactivateService } from './canactivate.service';

const routes: Routes = [
  {path:'', redirectTo: '/Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent},
  {path:'HOME',canActivate: [CanactivateService],component:HomeComponent},
  {path:'EMP',canActivate: [CanactivateService],component:EmployeeComponent},
  {path:'EMPLIST',canActivate: [CanactivateService], component:EmplistComponent},
  {path:'EMPFORM',canActivate: [CanactivateService],component:EmpformComponent},
  {path:'DEPT',canActivate: [CanactivateService],component:DepartmentComponent},
  {path:'DEPTLIST',canActivate: [CanactivateService], component:DeptdetaillistComponent},
  {path:'ATDE',canActivate: [CanactivateService],component:AttendanceComponent},
  {path:'ATDELIST',canActivate: [CanactivateService],component:AttendecelistComponent},
  {path:'ATTDEFORM',canActivate: [CanactivateService],component:AttendenceformComponent},
  {path:'**',canActivate: [CanactivateService], component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    // onSameUrlNavigation: 'reload'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
