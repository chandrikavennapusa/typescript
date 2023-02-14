export {};
let name:string ="lavanya";
let name1: string = 'John';
let age: number = 25;
let active: boolean = true;
let oct:number = 0o33;
let hxa:number=0x47;
let bin:number = 0b0101;
let dig:number = 383;
//toExponential   how many digits come after dot(.)

let ex:number =23456.7896;
console.log(ex.toExponential());
console.log(ex.toExponential(2));
let fx:number = 23456.7896;
console.log(fx.toFixed());
console.log(fx.toFixed(2));
//tolocal string
let ls:number = 23434355.978;
console.log(ls.toLocaleString());

let i:number = 785;
console.log(typeof(i));
console.log(typeof(i.toString()));


//STRING 
 let s1 ='kamalaa';
 //s1=77;    it is error.

 let s2:string ='neelaa';
 let s3 :string='line1\nline2';   // line break
 let s4:string =`addrees1    
 addrees2`;     // line break
 console.log(s3);
 console.log(s4);
 // template string es6

 let s5 ='ram';
 let s6 =`This is ${s5}`;
 console.log(s6);
 let s7:string ="Horse is an animal";
 console.log(s7.length);     // length of the string
 console.log(s7.charAt(3));  // charAt   return value
 console.log(s7.indexOf('s'));  //index of  return index
 console.log(s7.lastIndexOf('s'));
 let s8 = s7.concat(s6);      //concat
 let s9 =s7+s6;           //concat
 console.log(s8);
 console.log(s9);
 let s10:string = "belive in yourself";
 console.log(s10);
    console.log(s10.split(' '));    // slipt each word    o/p:= ['belive', 'in' ,'yourelf']
    console.log(s10.substring(3,8));   //stratindex ,end index(exclusive)
    console.log(s10.toUpperCase());   //toupper/tolowerCase

     //BOLLEANDATATYPE   boolean
     let isdone:boolean = true;
     let isvoteed:boolean=false;
     console.log(isdone);
     console.log(isvoteed);
     console.log( typeof(isdone));
     console.log(typeof(isvoteed));
     //null  
     let id:null;
      // id=77;    //Type '77' is not assignable to type 'null'.
      id=null;
     //  id='kjwei';  error.
     let ename1:string;
      // ename1=null;
     ename1='jnjef';

 let empid:number|string|boolean;
 empid=1;
 empid='kamala';
 empid=true;
let obj ={
    FN:"chandrika",
    LN:"vennapusa",
    age:20
}
obj.FN;
// obj.skill="java script";
var obj1:{}={};

//Array
let arr:string[]=["jhfgf","gfyft","yftf"];
arr.push("radha");
arr[0]="latha";
// arr.push(22);  not allow

let arr2:number[] = [1,2,3];
let arr3 = arr2.map((value)=> value*2);
console.log(arr3);
let arr4 =arr2.filter((value)=>value/2);
console.log(arr4);
let arr5 = arr2.every((value)=>value>2);
console.log(arr5);
let arr6 = arr2.some((value)=>value>2);
console.log(arr6);
let arr7 = arr2.reduce((acc,cur)=>acc+=cur);
console.log(arr7);
arr2.forEach((value)=>console.log(value));

let arr8 :(string|number)[] = ["latha",1,"radha",2];

//TUplES
let tup:[string,number,boolean]=["kall",44,true];


function log(message):void{
    console.log(message);
}

log('chandri');


type alphanumeric=string|number|boolean;
let x:alphanumeric;
x="hello";
console.log(x);
x=999;
console.log(x);
x=true;
console.log(x);








