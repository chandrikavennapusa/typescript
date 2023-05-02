import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollerModule } from 'primeng/scroller';
import { DialogModule } from 'primeng/dialog';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CaptchaDetailsComponent } from './captcha-details/captcha-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
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
    DialogModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
