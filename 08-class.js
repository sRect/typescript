"use strict";
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(name, age, isBeautiful) {
        this.name = name;
        this.age = age;
        this.isBeautiful = isBeautiful;
    }
    Xiaojiejie.prototype.sayHello = function () {
        console.log("\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u4ECA\u5E74" + this.age + "\u5C81\uFF01");
    };
    return Xiaojiejie;
}());
var girl = new Xiaojiejie("小红", 18, true);
console.log(girl);
girl.sayHello();
