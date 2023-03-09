import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy1RoutingModule } from './lazy1-routing.module';
import { Lazycomp1Component } from './lazycomp1/lazycomp1.component';
import { Lazycomp2Component } from './lazycomp2/lazycomp2.component';


@NgModule({
  declarations: [
    Lazycomp1Component,
    Lazycomp2Component
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ]
})
export class Lazy1Module { }
