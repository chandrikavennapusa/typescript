import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoureserviceService } from "./service/coureservice.service";
@Injectable()
export class resloveclas implements Resolve<any>{
    constructor(private courses : CoureserviceService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return  this.courses.getcourseget().then((data:any)=>{
            return data;
        })
    }


}