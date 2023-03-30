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
import { FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { DeptdetaillistComponent } from './deptdetaillist/deptdetaillist.component';
import { AttendecelistComponent } from './attendecelist/attendecelist.component';
import { EmplistComponent } from './emplist/emplist.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FooterComponent } from './footer/footer.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { AttendenceformComponent } from './attendenceform/attendenceform.component';
import { EmpformComponent } from './empform/empform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanactivateService } from './canactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    AttendanceComponent,
    HeaderComponent,
    DeptdetaillistComponent,
    AttendecelistComponent,
    EmplistComponent,
    FooterComponent,
    AttendenceformComponent,
    EmpformComponent,
    PagenotfoundComponent  
  ],
  imports: [
   
    AppRoutingModule,
    InputTextModule,
   RouterModule,
   ButtonModule,
   MatInputModule,
   PasswordModule,
   BrowserAnimationsModule,
   ImageModule,
   FormsModule,
   RadioButtonModule,
   TableModule ,
   CalendarModule,
   FileUploadModule,
   HttpClientModule,
   Ng2TelInputModule,
   InputNumberModule,
   ToastModule ,
   MessagesModule ,
   ConfirmDialogModule
  ],
  providers: [ServicesService,ConfirmationService , CanactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
