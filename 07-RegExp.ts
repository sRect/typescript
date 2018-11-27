let reg: RegExp = new RegExp("hello");
let reg2: RegExp = /hello/gi;

let my_str: string = "hello-hello";

let my_result: boolean = reg.test(my_str);
let my_result2: any = reg2.exec(my_str);

console.log(my_result)
console.log(my_result2)