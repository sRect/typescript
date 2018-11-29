"use strict";
// 面向对象编程-命名空间
var xiaomi;
(function (xiaomi) {
    var Mobile = /** @class */ (function () {
        function Mobile(price) {
            this.name = '小米';
            this.price = price;
        }
        Mobile.prototype.introduce = function () {
            console.log(this.name + "\u624B\u673A\uFF0C\u4EF7\u683C" + this.price);
        };
        return Mobile;
    }());
    xiaomi.Mobile = Mobile;
})(xiaomi || (xiaomi = {}));
var iPhone;
(function (iPhone) {
    var Mobile = /** @class */ (function () {
        function Mobile(price) {
            this.name = '苹果';
            this.price = price;
        }
        Mobile.prototype.introduce = function () {
            console.log(this.name + "\u624B\u673A\uFF0C\u4EF7\u683C" + this.price);
        };
        return Mobile;
    }());
    iPhone.Mobile = Mobile;
})(iPhone || (iPhone = {}));
var andriod = new xiaomi.Mobile(2499);
var ios = new iPhone.Mobile(12000);
andriod.introduce();
ios.introduce();
