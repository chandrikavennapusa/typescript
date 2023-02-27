import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

export class usernames{
    name=[
        {name:"jhon",age:25,university:"yvu"},
        {name:"kamal",age:20,university:"sku"}
    ];
 
    submitmethod = new EventEmitter<{name:string,age:number,university:string}>;

    savedetais(name3:{name:string,age:number,university:string}){
            this.submitmethod.emit(name3);
    }
}