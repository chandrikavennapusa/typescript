import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { usernames } from './services/user.services';
import { AddcomComponent } from './addcom/addcom.component';
import { AlluserComponent } from './alluser/alluser.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcomComponent,
    AlluserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [usernames],
  bootstrap: [AppComponent]
})
export class AppModule { }
