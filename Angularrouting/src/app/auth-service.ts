export class authservice{
    loogedIn:boolean=false;
    login(){
        this.loogedIn=true;
    }
    logout(){
        this.loogedIn=false;
    }
    IsAutheticated(){
        return this.loogedIn;
    }
}