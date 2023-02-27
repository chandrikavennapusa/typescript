import { Injectable } from "@angular/core";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { Loggeruser } from "./logger.service";

@Injectable()
export class Userservice{
    constructor (private loggeruser:Loggeruser){}
    users=[
        {name:"chandu",status:"active"},
        {name:"radha",status:"inactive"},
        {name:"latha",status:"active"}
    ];
    Addusers(name:string,status:string){
        this.users.push({name:name ,status:status} );
        this.loggeruser.logger(name,status);
    }
   
}