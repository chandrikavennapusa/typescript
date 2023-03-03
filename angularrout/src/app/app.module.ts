import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { canActivatedService  } from './canactivated.service';
import { Authenticate } from './authservice.service';
import { AboutsComponent } from './about/abouts/abouts.component';
import { ErrorComponent } from './error/error.component';
import { EmpComponent } from './emp/emp.component';
import { FormComponent } from './form/form.component';
import { deactivated } from './deactivated.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AboutsComponent,
    ErrorComponent,
    EmpComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [canActivatedService ,Authenticate,deactivated],
  bootstrap: [AppComponent]
})
export class AppModule { }
