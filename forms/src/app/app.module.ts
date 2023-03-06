import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Forms1Component } from './forms1/forms1.component';
import { Forms2Component } from './forms2/forms2.component';
import { Forms3Component } from './forms3/forms3.component';

@NgModule({
  declarations: [
    AppComponent,
    Forms1Component,
    Forms2Component,
    Forms3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
