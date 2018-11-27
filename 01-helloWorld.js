"use strict";
/**
 * 数据类型
 * Undefined :
 * Number:数值类型(NaN，Infinity，-Infinity);
 * string : 字符串类型;
 * Boolean: 布尔类型；
 * enum：枚举类型；
 * any : 任意类型，一个牛X的类型；
 * void：空类型；
 * Array : 数组类型;
 * Tuple : 元祖类型；
 * Null ：空类型
 */
var str = "hello world";
console.log(str);
var num = NaN;
var num2 = 18;
var num3 = 175.5;
console.log(num, num2, num3);
var MOBILE;
(function (MOBILE) {
    MOBILE[MOBILE["xiaomi"] = 0] = "xiaomi";
    MOBILE[MOBILE["huawei"] = 1] = "huawei";
    MOBILE[MOBILE["vivo"] = 2] = "vivo";
    MOBILE[MOBILE["oppo"] = 3] = "oppo";
})(MOBILE || (MOBILE = {}));
;
var REN;
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(MOBILE.huawei);
console.log(REN.nv);
var a = true;
a = 18;
a = "hello";
console.log(a);
var arr = [1, 2, 3];
console.log(arr);
