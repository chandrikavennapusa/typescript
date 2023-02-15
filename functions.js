// tsc -t es5 functions.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function addnum(a, b) {
    return a + b;
}
console.log(addnum(10, 20));
function addstr(a, b) {
    return a + b;
}
console.log(addstr('10', '20'));
function sub(name, age) {
    console.log("".concat(name = name, " ").concat(age = age));
}
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add('10', '20'));
sub('chandri', 33);
function mul() {
    var i = 0;
    function mul1() {
        console.log(i++);
    }
    return mul1;
}
var mul2 = mul();
mul2();
mul2();
function bodmas(a, c, b) {
    if (a === void 0) { a = 10; }
    return a + c;
}
console.log(bodmas(20, 30));
function gettotal() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = 0;
    num.forEach(function (value) { return total += value; });
    return total;
}
gettotal(10, 20);
function sub1(a, b) {
    if (a === void 0) { a = 10; }
    return b - a;
}
console.log(sub1(undefined, 20));
var person1 = /** @class */ (function () {
    function person1(name, university, branch) {
        this.name = name;
        this.university = university;
        this.branch = branch;
    }
    person1.prototype.getfull = function () {
        return "".concat(this.name, " ").concat(this.university, " ").concat(this.branch);
    };
    return person1;
}());
var fun2 = new person1("jj", "kk", "ll");
console.log(fun2);
var person = /** @class */ (function () {
    function person(ssn, FN, LN) {
        this.ssn = ssn;
        this.FN = FN;
        this.LN = LN;
    }
    person.prototype.getFull = function () {
        return " ".concat(this.ssn, " ").concat(this.FN, " ").concat(this.LN);
    };
    return person;
}());
var fun1 = new person("hello", "hii", "namaste");
console.log(fun1);
var person3 = /** @class */ (function () {
    function person3(date) {
        this.date = date;
        this.date = date;
    }
    return person3;
}());
var fun3 = new person3(new Date());
console.log(fun3);
var person4 = /** @class */ (function () {
    function person4(birthday) {
        this.birthday = birthday;
    }
    return person4;
}());
var fun4 = new person4(new Date());
console.log(fun4);
var person5 = /** @class */ (function () {
    function person5() {
        this._itcompany = "";
        this._bankcom = "";
        this._hospital = "";
    }
    Object.defineProperty(person5.prototype, "itcompany", {
        get: function () {
            return this._itcompany;
        },
        set: function (itc) {
            this._itcompany = itc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person5.prototype, "bank", {
        get: function () {
            return this._bankcom;
        },
        set: function (bankc) {
            this._bankcom = bankc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person5.prototype, "hospital", {
        get: function () {
            return this._hospital;
        },
        set: function (hosip) {
            this._hospital = hosip;
        },
        enumerable: false,
        configurable: true
    });
    person5.prototype.campas = function () {
        return "".concat(this.itcompany, " ").concat(this.bank, " ").concat(this.hospital);
    };
    return person5;
}());
var fun5 = new person5();
fun5.itcompany = "itorizon";
fun5.bank = "hdfc";
fun5.hospital = "central";
console.log(fun5);
var animal = /** @class */ (function () {
    function animal(color, eat) {
        this.color = color;
        this.eat = eat;
    }
    animal.prototype.getani = function () {
        return "".concat(this.color, " ").concat(this.eat);
    };
    return animal;
}());
var human = /** @class */ (function (_super) {
    __extends(human, _super);
    function human(color, eat, walk, eye) {
        var _this = _super.call(this, color, eat) || this;
        _this.walk = walk;
        _this.eye = eye;
        return _this;
    }
    human.prototype.gethum = function () {
        return "super.getani()+ ".concat(this.walk, " ").concat(this.eye);
    };
    return human;
}(animal));
var fun6 = new human("brown", "grass", "noraml", "liteblue");
console.log(fun6);
var fun7 = new animal("grey", "rice");
console.log(fun7);
var incr = /** @class */ (function () {
    function incr(num, city) {
        this.num = num;
        this.city = city;
        incr.count++;
    }
    incr.count = 0;
    return incr;
}());
var jhon = new incr(1, "ramu");
var jony = new incr(2, "hat");
console.log(incr.count);
