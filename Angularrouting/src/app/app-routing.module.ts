import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'', redirectTo:'HOME',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'HOME', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'About/:name', component:AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'coures', component:CoursesComponent},
  {path:'coures', children:[
   { path:'course/:id', component:CourseComponent}
  ]},
  // {path:'coures/course/:id', component:CourseComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
