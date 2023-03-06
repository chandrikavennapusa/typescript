import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Forms1Component } from './forms1/forms1.component';
import { Forms2Component } from './forms2/forms2.component';
import { Forms3Component } from './forms3/forms3.component';

const routes: Routes = [
  {path:'',component: Forms1Component},
  {path:'page',component:Forms2Component},
  {path:'form' , component: Forms1Component},
  {path:'forms',component:Forms3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
