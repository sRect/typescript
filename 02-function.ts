function fn(age: number): string {
  return `我今年${age}岁`;
}
const age: number = 18;
const result: string = fn(age);
console.log(result);

// 可选参数的函数
function xiaojiejie(age: string, stature?: string): string {
  if (stature !== undefined) {
    return `这是一位${age}、${stature}的小姐姐`;
  } else {
    return `这是一位${age}的小姐姐`;
  }

}
const age2: string = '18岁';
const stature: string = '大长腿';
const result2: string = xiaojiejie(age2);
const result3: string = xiaojiejie(age2, stature);
console.log(result2);
console.log(result3);

// 有默认参数的函数
function xiaogege(age: number = 18, height: number = 170.5): any {
  console.log(`这是一位${age}岁、身高${height}cm的小哥哥`);
}
xiaogege();

// 剩余参数的函数
function myFav(...fav: string[]): any {
  console.log(`我的爱好有：${fav.join('、')}等`);
}
myFav("code", "music", "game");