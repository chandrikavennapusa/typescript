import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { PageComponent } from "./page/page.component";


export class deactivate implements CanDeactivate<PageComponent>{
  
    canDeactivate(component:PageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
     return component.candeactivate();
    }

}