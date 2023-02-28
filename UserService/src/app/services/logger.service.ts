import { Injectable } from "@angular/core";
import { SomeTextMessage } from "./sometextmessage";

@Injectable()
export class Loggeruser{
    constructor(private sometextmessage:SomeTextMessage){}
    logger(name:string , status:string){
        console.log("This is loggeruser"+name+"this is a "+status) ;
        this.sometextmessage.helloworld();
    }
}