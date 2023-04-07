import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CanactivateService implements CanActivate{

  constructor( private router: Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
  
   if ( String(localStorage.getItem("empbooleanvalue")) == "false") {
    this.router.navigate(['/Login']);
     return false
 }
   return true;  
   
   } 
   
}
