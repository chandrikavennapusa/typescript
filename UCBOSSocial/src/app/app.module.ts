import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollerModule } from 'primeng/scroller';
import { DialogModule } from 'primeng/dialog';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CaptchaDetailsComponent } from './captcha-details/captcha-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DividerModule } from 'primeng/divider';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { APIServicesService } from './apiservices.service';
import { DatePipe } from '@angular/common';
import { ImageModule } from 'primeng/image';
@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CaptchaDetailsComponent,
    RegisterFormComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    ScrollerModule,
    DialogModule,
    PickerModule,
    FileUploadModule,
    HttpClientModule,
    AvatarModule,
    ToastModule,
    ReactiveFormsModule,
   NgbModule,
   NgbCarouselModule,
   DividerModule,
   ConfirmDialogModule,
   PanelModule , 
   ImageModule 
  ],
  providers: [APIServicesService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
