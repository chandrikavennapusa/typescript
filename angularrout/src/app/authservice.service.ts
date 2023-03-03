export class Authenticate {
    InLogged:boolean=false;
    login(){
        this.InLogged=true;
    }
    logout(){
        this.InLogged=false;
    }
    isAutheticated(){
        return this.InLogged ;
    }
}