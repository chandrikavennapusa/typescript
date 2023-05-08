import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanactivateService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if((String(localStorage.getItem('homePageBooleanValue')) == 'true' ) && (localStorage.getItem('loginBooleanValue')) == 'true'){
      this.router.navigate(['/homeScreen']);
      return false;
    } 
    return true;
  }
}
