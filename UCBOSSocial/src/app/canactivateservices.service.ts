import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanactivateservicesService {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if ((String(localStorage.getItem('captchaBooleanValue')) == 'false')) {
      this.router.navigate(['/captchaPage']);
      return false;
    } 
    return true;
  }
}
