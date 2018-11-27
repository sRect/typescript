"use strict";
var reg = new RegExp("hello");
var reg2 = /hello/gi;
var my_str = "hello-hello";
var my_result = reg.test(my_str);
var my_result2 = reg2.exec(my_str);
console.log(my_result);
console.log(my_result2);
