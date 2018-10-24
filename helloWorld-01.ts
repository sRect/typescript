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
var str: string = "hello world";
console.log(str)

var num: number = NaN;
var num2: number = 18;
var num3: number = 175.5;
console.log(num, num2, num3);

enum MOBILE { xiaomi, huawei, vivo, oppo };
enum REN { nan = "男", nv = "女", yao = "妖" }
console.log(MOBILE.huawei)
console.log(REN.nv)

var a: any = true;
a = 18;
a = "hello";
console.log(a)