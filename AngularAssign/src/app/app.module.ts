import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { MatInputModule } from '@angular/material/input';
import {ImageModule} from 'primeng/image';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
   RouterModule,
   ButtonModule,
   MatInputModule,
   PasswordModule,
   BrowserAnimationsModule,
   ImageModule,
   FormsModule,
  
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
