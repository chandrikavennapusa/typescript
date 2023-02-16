let a:number=10;
let b:string="helo";
let c:boolean=false;
let d:number[]=[];
let e:object;
let f:[string,number]; //tuple
enum g{"jan","feb"}; // enum
let h : string | number // union
type i = string | number
let  j :i;

function  k (a:number,b:number): void{
 console.log("it is okay");
};console.log( k(10,20));  

 let l:(a:number,b:number) => void =
  function(a:number, b:number){
    console.log(a+b);
  };  console.log(l(30,40));

  function sub(a:number ,b:number,c?:number):number{
    if(c)
   return a*b*c;
    else{
        return a*b;
    }
};console.log( sub(10,20));

function mul (a:number,b:number): number;
function mul (a:string,b:string): string;
function mul(a: any, b: any): any {
    return a + b;
 }

// {
//     return a*b;
// }; console.log(mul (undefined,50));
// function mul (a:string,b:string): string;
// {
//     return a+b;
// };console.log(mul("hello","hii"));
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}

class cls{
  private  j:string;
   private  k:string;
    constructor(j:string,k:string){
        this.j=j;
        this.k=k;
    }
    getop(){
        return `${this.j} ${this.k}`;
    }
}
let  m = new cls("heloo","hii");
console.log(m);
class cls1{
    readonly j:string;
    k:string;
    constructor(j:string,k:string){
        this.j=j;
        this.k=k;
    }
    getop(){
        return `${this.j} ${this.k}`;
    }
}
let n = new cls1("namste","vanakam");
console.log(n);

class cls3{
 private _j:string="";
 private _k:string="";
    get jj(){
        return this._j;
    }
    set jj(value:string){
        this._j=value;
    }
    get kk(){
        return this._k;
    }
    set kk(no:string){
        this._k=no;
    }
    ll(){
        return `${this.jj} ${this.kk}`;
    }
}
let z = new cls3();
z.jj="djhgfh";
z.kk="geyf";
