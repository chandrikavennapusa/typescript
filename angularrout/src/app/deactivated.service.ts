import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { FormComponent } from "./form/form.component";
export interface isDeactivate{
    Deactivatedas:()=> Observable<boolean> | Promise<boolean> | boolean;
}

export class deactivated implements CanDeactivate< isDeactivate> {
    canDeactivate(component:isDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
       return component.Deactivatedas();
    }

}