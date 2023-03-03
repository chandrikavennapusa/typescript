import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './about/abouts/abouts.component';

import { canActivatedService } from './canactivated.service';
import { deactivated } from './deactivated.service';
import { EmpComponent } from './emp/emp.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'' ,redirectTo:'HOME',pathMatch:"full"},
  {path:'',component:HomeComponent},
  {path:'HOME',component:HomeComponent },
  {path:'FORM',canDeactivate:[ deactivated],component:FormComponent},
  {path:'ABOUT', component:AboutComponent },

   {path:'ABOUT',canActivateChild:[canActivatedService] ,children:[{path:'ABOUTS/:id',component:AboutsComponent}]},


   {path:'EMP',component:EmpComponent},      //,canActivate:[canActivatedService]
   {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
