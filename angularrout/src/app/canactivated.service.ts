import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Authenticate } from "./authservice.service";
@Injectable()
export class  canActivatedService  implements CanActivate,CanActivateChild{

    constructor(private authser:Authenticate){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
       return this.canActivate(childRoute,state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
       if(this.authser.isAutheticated()){
        return true;
       }else{
        return false;
       }
    }

}