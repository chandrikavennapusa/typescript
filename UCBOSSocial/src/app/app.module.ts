import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CaptchaDetailsComponent } from './captcha-details/captcha-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CaptchaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
