import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanactivateserviceService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if ((String(localStorage.getItem('loginBooleanValue')) == 'false')) {
      this.router.navigate(['/loginPage']);
      return false;
    } 
    return true;
  }
}
