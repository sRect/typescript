"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var XiaoJieJie3 = /** @class */ (function () {
    function XiaoJieJie3(sex, name, age, isBeautiful) {
        this.sex = sex;
        this.name = name;
        this.age = age;
        this.isBeautiful = isBeautiful;
    }
    XiaoJieJie3.prototype.sayHello = function () {
        console.log("\u6211\u7684\u540D\u5B57\u53EB" + this.name + ",\u4ECA\u5E74" + this.age + "\u5C81\uFF01");
    };
    return XiaoJieJie3;
}());
var girl3 = new XiaoJieJie3("女", "小姐姐", 18, true);
var Xiaojiejie4 = /** @class */ (function (_super) {
    __extends(Xiaojiejie4, _super);
    function Xiaojiejie4(intrest) {
        var _this = _super.call(this, "人妖", "小姐姐2", 19, true) || this;
        _this.intrest = intrest;
        return _this;
    }
    Xiaojiejie4.prototype.introduce = function () {
        _super.prototype.sayHello.call(this);
        console.log("\u6211\u7684\u7231\u597D\u6709\uFF1A" + this.intrest.join("、"));
    };
    return Xiaojiejie4;
}(XiaoJieJie3));
var renyao1 = new Xiaojiejie4(["钓凯子", "撩妹"]);
renyao1.introduce();
