import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddirecDirective } from './adddirec.directive';
import { HighliteDirective } from './highlite.directive';
import { FooterstyleDirective } from './footerstyle.directive';
import { StructralDirective } from './structral.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdddirecDirective,
    HighliteDirective,
    FooterstyleDirective,
    StructralDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
