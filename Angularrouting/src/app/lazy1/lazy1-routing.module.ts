import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lazycomp1Component } from './lazycomp1/lazycomp1.component';
import { Lazycomp2Component } from './lazycomp2/lazycomp2.component';

const routes: Routes = [
  {path:"",component:Lazycomp1Component},
  {path:"lazy1",component:Lazycomp1Component},
  {path:"lazy2",component:Lazycomp2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
