import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class NotificationService{
    // private successmesage = new Subject<string>;
    private successmesage = new EventEmitter<string>;
    successmessageaction=this.successmesage.asObservable(); 
    setsuccessmessage(message:string){
        this.successmesage.next(message);
    }
    
}