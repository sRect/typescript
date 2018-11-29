"use strict";
var shuaige = { sex: '男', interest: ["美女", "游戏"] };
console.log(shuaige);
var mySearchGirl = function (dachangtui, daxiong) {
    if (dachangtui && daxiong) {
        return true;
    }
    else {
        return false;
    }
};
console.log(mySearchGirl(true, true));
