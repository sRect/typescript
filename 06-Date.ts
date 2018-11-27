let date: Date = new Date();
console.log(date) // 2018-11-27T14:22:09.000Z

let date2: Date = new Date(1000);
console.log(date2) // 1970-01-01T00:00:01.000Z

let date3: Date = new Date("2018-11-27 22:18:30");
let date4: Date = new Date("2018/11/27 22:18:30");
let date5: Date = new Date("2018-11-27T22:18:30");
let date6: Date = new Date("2018/11/27T22:18:30");

console.log(date3) // 2018-11-27T14:18:30.000Z
console.log(date4) // 2018-11-27T14:18:30.000Z
console.log(date5) // 2018-11-27T14:18:30.000Z
console.log(date6) // Invalid Date