import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { setbackgroundcolor } from './customDirective/backgroundcolor.directive';
import { RenDirective } from './customDirective/ren.directive';
import { HighlateDirective } from './customDirective/highlate.directive';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    Comp1Component,
    Comp2Component,
   setbackgroundcolor,
   RenDirective,
   HighlateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    setbackgroundcolor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
