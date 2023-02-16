interface inh{
    fristname:string;
    secondname:string;
}
function fun(inh:inh){
    return `${inh.fristname} ${inh.secondname}`;
}

let obj=
{
    fristname:"chandrika",
    secondname:"vennapusa"
};
console.log(fun(obj));
let obje={
    fristname:"chandu",
    secondname:"vennapusa",
    thirdname:"owk"
};
console.log(fun(obje));

interface inh1{
    forthname:string;
    fivthname?:string;
    sixthname:string
};
function func(inh1:inh1){
    if(inh1.fivthname){
        return `${inh1.forthname} ${inh1.fivthname} ${inh1.sixthname}`;
    }
    return `${inh1.forthname} ${inh1.sixthname}`;
}
let obje1={
    forthname:"radha",
    sixthname:"nossam"
};
obje1.forthname="latha";
console.log(func(obje1));

interface inh2{
    readonly  seventhname:string;
    eigthname:string;
}
function func1(inh2:inh2){
    return`${inh2.seventhname} ${inh2.eigthname}`;
};
let obje2=
 {
    seventhname:"chethana",
    eigthname:"kdfje"
};
obje2.seventhname="muni";
console.log(func1(obje2));

interface inh3{
    (ninthname:string,age:number,isboolean:boolean):string;
}
let format:inh3;
format=function(ninthname:string,age:number,isboolean:boolean){
    return isboolean? ninthname.toUpperCase()+age : ninthname.toUpperCase()+age ;
}
console.log(format("merry",25,true));
interface inh4{
    tojson():string;
}
class clsinh implements inh4{
    constructor(private ninthname:string,private tenthname:string){
        this.ninthname=ninthname;
        this.tenthname=tenthname;
    }
    tojson(): string {
        return`${this.ninthname} ${this.tenthname}`;
    };
}
let val = new clsinh("goood","fine");
console.log(val.tojson());
interface a{
    aa(age:number,rolnum:number):string;
}
interface b1 extends a{

    bb(branch:string):string;
}

class clsinh1 implements b1{
    constructor(private age:number,private rolnum:number,private branch:string){
        this.age=age;
        this.rolnum=rolnum;
        this.branch=branch;
    }
    bb(branch: string): string {
     return `${this.age} ${this.rolnum} ${this.branch}`;   
    }
    aa(age: number, rolnum: number): string {
        return `${this.age} ${this.rolnum}`;
    }
}
let cc = new clsinh1(25,11,"mcs");
console.log(cc);

interface emp{
    id1:number;
    tag:string;
}
interface stud{
    teacher:string;
    hod:string;
}
type uni = emp & stud;
let u :uni ={
 id1:1,
 tag:"idcard",
 teacher:"swetha",
 hod:"reddyai"
};
function func2(uni:uni){
    return `${uni.id1} ${uni.tag} ${uni.teacher} ${uni.hod}`;
}
console.log(func2(u));

type numstr = number | string;
function func3(a:numstr ,b:numstr){
    if(typeof a === 'number' && typeof b ==="number"){
        return a+b;
    }
    if(typeof a === "string" && typeof b ==="string" ){
        return a+b;
    }
}

console.log(func3(10,20));

class a{
  static  az:string; 
   static by:string;

  static cx(){return `${this.az} ${this.by}`}
}
class b{
    dv:string;
    eu:string;
    constructor(dv:string,eu:string){
        this.dv=dv;
        this.eu=eu;
    }
    ft():string{
        return`${this.dv} ${this.eu}`;
    }
}
type ab = a | b ;
function func4(gs:ab){
       let msg:String;
    if(gs instanceof b){
      msg= gs.ft()?"it is okay":"it is not okay";
    }
}
// typescript concepts.

// let m:string="10";
// let n :number=  number(m);

// let j:number =20;
// let k:string  = <string>(j);

function func5(price:number,discount:number,isbol:boolean): number | string{
    if(isbol){
        return price;
    }
    else{
       return discount;
    }
}

let ht=func5(22,44,true)as string;
let or =<number> func5(22,44,false);
console.log(ht);
console.log(or);

function gen(item:number[]):number{
    return item.length *10;
}
let val1 = [1,2,3,4,5];
console.log(gen(val1));
function gen1(items:string[]): string{
    return items.length+"s";
}
let val2 = ["red" ,"black","green"];
console.log(gen1(val2));


function gen2<T>(arg:T[]):T{
    let ran =Math.floor(Math.random() * arg.length);
    return arg[ran];
}
let color = ["red","green","yellow"];
console.log(gen2<string>(color));
let ser=[1,2,3,4,5,5];
console.log(gen2<number>(ser));

function res(array:any):number{
let doll = Math.floor(Math.random() * array.length);
return doll;
}

function gen3<A,B>(ar:A[] ,br:B[]): [A,B]{
   const p =ar[res(ar)];
   const q=br[res(br)];
   return [p,q];

}
const [colors,sers] = gen3(color , ser);
console.log(colors , typeof colors);
console.log(sers ,typeof sers);

class cl1<keytype,valutype> {
    key:keytype | undefined;
    value:  valutype |undefined;
    constructor(key:keytype,value:valutype){
        this.key=key;
        this.value=value;
    }
}
const {key,value} =  new cl1<string,string> ("24","hff");
console.log(key,value);

import { sundar } from "./functions";

class cl2 implements sundar{
    boy: string;
    gril:string;
    constructor(boy:string,gril:string){
        this.boy=boy;
        this.gril=gril
    }
    getre(){return`${this.boy}${this.gril}`};
}
let y1 = new  cl2("hello","hii");
console.log(y1);
