"use strict";
function fn(age) {
    return "\u6211\u4ECA\u5E74" + age + "\u5C81";
}
var age = 18;
var result = fn(age);
console.log(result);
// 可选参数的函数
function xiaojiejie(age, stature) {
    if (stature !== undefined) {
        return "\u8FD9\u662F\u4E00\u4F4D" + age + "\u3001" + stature + "\u7684\u5C0F\u59D0\u59D0";
    }
    else {
        return "\u8FD9\u662F\u4E00\u4F4D" + age + "\u7684\u5C0F\u59D0\u59D0";
    }
}
var age2 = '18岁';
var stature = '大长腿';
var result2 = xiaojiejie(age2);
var result3 = xiaojiejie(age2, stature);
console.log(result2);
console.log(result3);
// 有默认参数的函数
function xiaogege(age, height) {
    if (age === void 0) { age = 18; }
    if (height === void 0) { height = 170.5; }
    console.log("\u8FD9\u662F\u4E00\u4F4D" + age + "\u5C81\u3001\u8EAB\u9AD8" + height + "cm\u7684\u5C0F\u54E5\u54E5");
}
xiaogege();
// 剩余参数的函数
function myFav() {
    var fav = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fav[_i] = arguments[_i];
    }
    console.log("\u6211\u7684\u7231\u597D\u6709\uFF1A" + fav.join('、') + "\u7B49");
}
myFav("code", "music", "game");
