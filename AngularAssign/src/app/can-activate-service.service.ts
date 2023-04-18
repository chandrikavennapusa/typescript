import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivateServiceService implements CanActivate {
  username = localStorage.getItem('username');

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      (this.username == 'employee' &&
        String(localStorage.getItem('empbooleanvalue')) == 'true') ||
      String(localStorage.getItem('empbooleanvalue')) == 'false'
    ) {
      this.router.navigate(['/Login']);
      return false;
    }
    return true;
  }
}
