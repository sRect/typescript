// 可选参数接口
interface Xiaogege {
  sex: string;
  interest: string[];
  liaomei?: boolean;
}

let shuaige: Xiaogege = { sex: '男', interest: ["美女", "游戏"] }
console.log(shuaige)

// 规范函数类型接口
interface SearchGirl {
  (dachangtui: boolean, daxiong: boolean): boolean;
}

const mySearchGirl: SearchGirl = (dachangtui: boolean, daxiong: boolean): boolean => {
  if (dachangtui && daxiong) {
    return true;
  } else {
    return false;
  }
}

console.log(mySearchGirl(true, true))
