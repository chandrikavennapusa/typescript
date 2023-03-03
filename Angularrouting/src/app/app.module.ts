import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { ContentComponent } from './content/content.component';
import { coursegurdservices } from './course-gurd.services';
import { authservice } from './auth-service';
import { PageComponent } from './page/page.component';
import { deactivate } from './deactivate.service';
import { resloveclas } from './reslove.services';
const approut:Routes=[
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,
    CourseComponent,
    ContentComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [coursegurdservices,authservice, deactivate,resloveclas],
  bootstrap: [AppComponent]
})
export class AppModule { }
