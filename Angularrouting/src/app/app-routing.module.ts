import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { coursegurdservices } from './course-gurd.services';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { deactivate } from './deactivate.service';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { resloveclas } from './reslove.services';

const routes: Routes = [
  // {path:'', redirectTo:'HOME',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'HOME', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'PAGE',canDeactivate:[deactivate] ,component:PageComponent},
  {path:'About/:name', component:AboutComponent},
  {path:'Contact', component:ContactComponent },    //, canActivate:[coursegurdservices]

  {path:'coures',  resolve:{corses:resloveclas}, component:CoursesComponent},

  {path:'coures',canActivateChild:[coursegurdservices],  children:[                                    //
   { path:'course/:id', component:CourseComponent}
  ]},
  // {path:'coures/course/:id', component:CourseComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
