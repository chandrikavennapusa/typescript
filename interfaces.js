"use strict";
exports.__esModule = true;
function fun(inh) {
    return "".concat(inh.fristname, " ").concat(inh.secondname);
}
var obj = {
    fristname: "chandrika",
    secondname: "vennapusa"
};
console.log(fun(obj));
var obje = {
    fristname: "chandu",
    secondname: "vennapusa",
    thirdname: "owk"
};
console.log(fun(obje));
;
function func(inh1) {
    if (inh1.fivthname) {
        return "".concat(inh1.forthname, " ").concat(inh1.fivthname, " ").concat(inh1.sixthname);
    }
    return "".concat(inh1.forthname, " ").concat(inh1.sixthname);
}
var obje1 = {
    forthname: "radha",
    sixthname: "nossam"
};
obje1.forthname = "latha";
console.log(func(obje1));
function func1(inh2) {
    return "".concat(inh2.seventhname, " ").concat(inh2.eigthname);
}
;
var obje2 = {
    seventhname: "chethana",
    eigthname: "kdfje"
};
obje2.seventhname = "muni";
console.log(func1(obje2));
var format;
format = function (ninthname, age, isboolean) {
    return isboolean ? ninthname.toUpperCase() + age : ninthname.toUpperCase() + age;
};
console.log(format("merry", 25, true));
var clsinh = /** @class */ (function () {
    function clsinh(ninthname, tenthname) {
        this.ninthname = ninthname;
        this.tenthname = tenthname;
        this.ninthname = ninthname;
        this.tenthname = tenthname;
    }
    clsinh.prototype.tojson = function () {
        return "".concat(this.ninthname, " ").concat(this.tenthname);
    };
    ;
    return clsinh;
}());
var val = new clsinh("goood", "fine");
console.log(val.tojson());
var clsinh1 = /** @class */ (function () {
    function clsinh1(age, rolnum, branch) {
        this.age = age;
        this.rolnum = rolnum;
        this.branch = branch;
        this.age = age;
        this.rolnum = rolnum;
        this.branch = branch;
    }
    clsinh1.prototype.bb = function (branch) {
        return "".concat(this.age, " ").concat(this.rolnum, " ").concat(this.branch);
    };
    clsinh1.prototype.aa = function (age, rolnum) {
        return "".concat(this.age, " ").concat(this.rolnum);
    };
    return clsinh1;
}());
var cc = new clsinh1(25, 11, "mcs");
console.log(cc);
var u = {
    id1: 1,
    tag: "idcard",
    teacher: "swetha",
    hod: "reddyai"
};
function func2(uni) {
    return "".concat(uni.id1, " ").concat(uni.tag, " ").concat(uni.teacher, " ").concat(uni.hod);
}
console.log(func2(u));
function func3(a, b) {
    if (typeof a === 'number' && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
}
console.log(func3(10, 20));
var a = /** @class */ (function () {
    function a() {
    }
    a.cx = function () { return "".concat(this.az, " ").concat(this.by); };
    return a;
}());
var b = /** @class */ (function () {
    function b(dv, eu) {
        this.dv = dv;
        this.eu = eu;
    }
    b.prototype.ft = function () {
        return "".concat(this.dv, " ").concat(this.eu);
    };
    return b;
}());
function func4(gs) {
    var msg;
    if (gs instanceof b) {
        msg = gs.ft() ? "it is okay" : "it is not okay";
    }
}
// typescript concepts.
// let m:string="10";
// let n :number=  number(m);
// let j:number =20;
// let k:string  = <string>(j);
function func5(price, discount, isbol) {
    if (isbol) {
        return price;
    }
    else {
        return discount;
    }
}
var ht = func5(22, 44, true);
var or = func5(22, 44, false);
console.log(ht);
console.log(or);
function gen(item) {
    return item.length * 10;
}
var val1 = [1, 2, 3, 4, 5];
console.log(gen(val1));
function gen1(items) {
    return items.length + "s";
}
var val2 = ["red", "black", "green"];
console.log(gen1(val2));
function gen2(arg) {
    var ran = Math.floor(Math.random() * arg.length);
    return arg[ran];
}
var color = ["red", "green", "yellow"];
console.log(gen2(color));
var ser = [1, 2, 3, 4, 5, 5];
console.log(gen2(ser));
function res(array) {
    var doll = Math.floor(Math.random() * array.length);
    return doll;
}
function gen3(ar, br) {
    var p = ar[res(ar)];
    var q = br[res(br)];
    return [p, q];
}
var _a = gen3(color, ser), colors = _a[0], sers = _a[1];
console.log(colors, typeof colors);
console.log(sers, typeof sers);
var cl1 = /** @class */ (function () {
    function cl1(key, value) {
        this.key = key;
        this.value = value;
    }
    return cl1;
}());
var _b = new cl1("24", "hff"), key = _b.key, value = _b.value;
console.log(key, value);
var cl2 = /** @class */ (function () {
    function cl2(boy, gril) {
        this.boy = boy;
        this.gril = gril;
    }
    cl2.prototype.getre = function () { return "".concat(this.boy).concat(this.gril); };
    ;
    return cl2;
}());
var y1 = new cl2("hello", "hii");
console.log(y1);
