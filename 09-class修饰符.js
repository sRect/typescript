"use strict";
var Xiaojiejie2 = /** @class */ (function () {
    function Xiaojiejie2(sex, name, age, isBeautiful) {
        this.sex = sex;
        this.name = name;
        this.age = age;
        this.isBeautiful = isBeautiful;
    }
    Xiaojiejie2.prototype.sayHello = function () {
        console.log("\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u4ECA\u5E74" + this.age + "\u5C81\uFF01");
    };
    return Xiaojiejie2;
}());
var girl2 = new Xiaojiejie2("女", "小红", 18, true);
console.log(girl2);
girl2.sayHello();
console.log(girl2.sex);
console.log(girl2.name);
console.log(girl2.age);
console.log(girl2.isBeautiful);
girl2.sex = "renyao";
girl2.name = 100;
girl2.isBeautiful = false;
console.log(girl2.sex);
console.log(girl2.name);
console.log(girl2.isBeautiful);
