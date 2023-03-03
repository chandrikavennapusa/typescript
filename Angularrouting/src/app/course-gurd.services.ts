import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authservice } from "./auth-service";
@Injectable()
export class  coursegurdservices implements CanActivate  ,CanActivateChild{
    constructor(private authservice:authservice , private router:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute,state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean  {
       if(this.authservice.IsAutheticated()){
                return true;
       }else{
        this.router.navigate(['/HOME']);
                return false;
       }
    }
    
}