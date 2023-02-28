import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Userservice } from './services/service';
import { Loggeruser } from './services/logger.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { FormsModule } from '@angular/forms';
import { SomeTextMessage } from './services/sometextmessage';
@NgModule({
  declarations: [
    AppComponent,
    AddserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ Userservice ,Loggeruser, SomeTextMessage],
  bootstrap: [AppComponent]
})
export class AppModule { }
