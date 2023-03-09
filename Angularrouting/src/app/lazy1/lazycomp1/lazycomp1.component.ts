import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lazycomp1',
  templateUrl: './lazycomp1.component.html',
  styleUrls: ['./lazycomp1.component.css']
})
export class Lazycomp1Component {
  constructor(private router:Router){}
  golazy2(){
    this.router.navigate(['lazy/lazy2'])
  }
}
