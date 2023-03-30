import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanactivateService {

 
  constructor( private router:Router){}

  
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean  {
  //    if(){
  //             return true;
  //    }else{
  //     this.router.navigate(['/HOME']);
  //             return false;
  //    }
  // }
  
}
