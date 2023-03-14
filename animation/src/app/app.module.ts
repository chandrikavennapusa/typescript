import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomstrucralDirective } from './customstrucral.directive';
import { CngifDirective } from './cngif.directive';
import { ChildComponent } from './child/child.component';
import { PipesPipe } from './pipes.pipe';
import { StudentsService } from './services/students.service';



@NgModule({
  declarations: [
    AppComponent,
    CustomstrucralDirective,
    CngifDirective,
    ChildComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
 
   
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
