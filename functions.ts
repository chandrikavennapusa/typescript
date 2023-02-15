// tsc -t es5 functions.ts

function addnum (a:number,b:number): number{
 return a+b;
}
console.log(addnum(10,20));
function addstr(a:string,b:string):string{
    return a+b;
}
console.log(addstr('10','20'));

function sub(name:string,age:number): void{
    console.log(`${name=name} ${age=age}`);
}
function add (a: number,b: number): number;
function add(a:string , b:string): string;
function add(a:any ,b:any): any{
    return a+b;
}
console.log(add(10,20));
console.log(add('10','20'));

sub('chandri',33);
function mul():any{
    let i=0;
    function mul1(){
        console.log(i++);
    }
    return mul1;
}
let mul2 = mul();
mul2();
mul2();

function bodmas (a:number=10,c:number,b?:number){
    return a+c ;
}
  console.log(bodmas(20,30));  
  function gettotal(...num:number[]): number{
        let total=0;
       num.forEach((value)=> total+=value);
        return total;
  }
gettotal(10,20);

function sub1(a:number=10 ,b:number): number{
    return b-a;
}
console.log(sub1(undefined,20));


class person1 {
    protected name:String;
    protected university:String;
    protected  branch :String;
               constructor (name:string,university:string,branch:string){
                this.name=name;
                this.university=university;
                this.branch=branch;
               }
     getfull():string{
            return `${this.name} ${this.university} ${this.branch}`;
        }
    }
let fun2 = new person1("jj","kk","ll");
console.log(fun2);

class person { 
    ssn:string;
    FN:string;
    LN:string;
    constructor(ssn:string, FN:string ,LN:string){
        this.ssn = ssn;
        this.FN=FN;
        this.LN=LN;
    }
        getFull():string{
            return ` ${this.ssn} ${this.FN} ${this.LN}`;
        }
}
let fun1 = new person("hello","hii","namaste");
console.log(fun1);

class person3{

    constructor(readonly date:Date){
            this.date=date;
    }
}
let fun3 = new person3(new Date());
console.log(fun3);
class person4{
    readonly birthday:Date;
    constructor(birthday:Date){
        this.birthday=birthday;
    }
}
let fun4 = new person4(new Date());
console.log(fun4);


class person5{
    private _itcompany:string="";
    private _bankcom:string="";
    private _hospital:string="";
   

    public get itcompany(){
      return  this._itcompany;
    }
    public set itcompany(itc:string){
        this._itcompany=itc;
    }

    public get bank(){
        return  this._bankcom;
      }
      public set bank(bankc:string){
          this._bankcom=bankc;
      }

      public get hospital(){
        return  this._hospital;
      }
      public set hospital(hosip:string){
          this._hospital=hosip;
      }
      
    public   campas():string{
        return `${this. itcompany} ${this.bank} ${this.hospital}`;
      }


}
let fun5 = new person5();

fun5.itcompany="itorizon";
fun5.bank="hdfc";
fun5.hospital="central";
console.log(fun5);

class animal{
    color:string;
    eat:string;
    constructor(color:string,eat:string){
        this.color=color;
        this.eat=eat;
    }
    getani(){
        return `${this.color} ${this.eat}`;
    }
}

class human extends animal{
    walk:string;
    eye:string;
    constructor(color:string,eat:string ,walk:string,eye:string){
        super(color,eat);
        this.walk=walk;
        this.eye=eye;
    }
    gethum(){
        return `super.getani()+ ${this.walk} ${this.eye}`;
    }
}
let fun6= new human("brown","grass","noraml","liteblue");
console.log(fun6);
let fun7 = new animal("grey","rice");
console.log(fun7);

class incr{
    static count:number=0;
    constructor (
        private num:number,
        private city:string ){
            incr.count++;
    }


}
let jhon = new incr(1,"ramu");
let jony=new incr(2,"hat");
console.log(incr.count);

abstract class parent1{
    constructor (private fristname:string,private secondname:string){
       
    }
    abstract gparent():number;
    hen():string{
            return `${this.fristname} ${this.secondname}`;
    }
    hat():string{
        return `this is${this.gparent()}`;
    }
}
class child1 extends parent1{
    constructor (fristname:string,secondname:string ,private salary:number){
super(fristname,secondname);
    }
    gparent(): number {
        return this.salary;
    }

}
interface syam{
    father:string;
    uncle?:string;
    mother:string;
}
function fun8(syam:syam){
    if(syam.uncle){
        return `${syam.father} ${syam.uncle}${syam.mother}`;
    }
    return `${syam.father} ${syam.mother}`;
}
let jhon22:syam ={
    father:"gopal",
    mother:"venky"
};
console.log(fun8(jhon22));

