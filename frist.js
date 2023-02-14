"use strict";
exports.__esModule = true;
var name = "lavanya";
var name1 = 'John';
var age = 25;
var active = true;
var oct = 27;
var hxa = 0x47;
var bin = 5;
var dig = 383;
//toExponential   how many digits come after dot(.)
var ex = 23456.7896;
console.log(ex.toExponential());
console.log(ex.toExponential(2));
var fx = 23456.7896;
console.log(fx.toFixed());
console.log(fx.toFixed(2));
//tolocal string
var ls = 23434355.978;
console.log(ls.toLocaleString());
var i = 785;
console.log(typeof (i));
console.log(typeof (i.toString()));
//STRING 
var s1 = 'kamalaa';
//s1=77;    it is error.
var s2 = 'neelaa';
var s3 = 'line1\nline2'; // line break
var s4 = "addrees1    \n addrees2"; // line break
console.log(s3);
console.log(s4);
// template string es6
var s5 = 'ram';
var s6 = "This is ".concat(s5);
console.log(s6);
var s7 = "Horse is an animal";
console.log(s7.length); // length of the string
console.log(s7.charAt(3)); // charAt   return value
console.log(s7.indexOf('s')); //index of  return index
console.log(s7.lastIndexOf('s'));
var s8 = s7.concat(s6); //concat
var s9 = s7 + s6; //concat
console.log(s8);
console.log(s9);
var s10 = "belive in yourself";
console.log(s10);
console.log(s10.split(' ')); // slipt each word    o/p:= ['belive', 'in' ,'yourelf']
console.log(s10.substring(3, 8)); //stratindex ,end index(exclusive)
console.log(s10.toUpperCase()); //toupper/tolowerCase
//BOLLEANDATATYPE   boolean
var isdone = true;
var isvoteed = false;
console.log(isdone);
console.log(isvoteed);
console.log(typeof (isdone));
console.log(typeof (isvoteed));
//null  
var id;
// id=77;    //Type '77' is not assignable to type 'null'.
id = null;
//  id='kjwei';  error.
var ename1;
// ename1=null;
ename1 = 'jnjef';
var empid;
empid = 1;
empid = 'kamala';
empid = true;
var obj = {
    FN: "chandrika",
    LN: "vennapusa",
    age: 20
};
obj.FN;
// obj.skill="java script";
var obj1 = {};
//Array
var arr = ["jhfgf", "gfyft", "yftf"];
arr.push("radha");
arr[0] = "latha";
// arr.push(22);  not allow
var arr2 = [1, 2, 3];
var arr3 = arr2.map(function (value) { return value * 2; });
console.log(arr3);
var arr4 = arr2.filter(function (value) { return value / 2; });
console.log(arr4);
var arr5 = arr2.every(function (value) { return value > 2; });
console.log(arr5);
var arr6 = arr2.some(function (value) { return value > 2; });
console.log(arr6);
var arr7 = arr2.reduce(function (acc, cur) { return acc += cur; });
console.log(arr7);
arr2.forEach(function (value) { return console.log(value); });
var arr8 = ["latha", 1, "radha", 2];
//TUplES
var tup = ["kall", 44, true];
function log(message) {
    console.log(message);
}
log('chandri');
var x;
x = "hello";
console.log(x);
x = 999;
console.log(x);
x = true;
console.log(x);
