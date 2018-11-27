class Xiaojiejie {
  name: string;
  age: number;
  isBeautiful: boolean;

  constructor(name: string, age: number, isBeautiful: boolean) {
    this.name = name;
    this.age = age;
    this.isBeautiful = isBeautiful;
  }

  sayHello() {
    console.log(`我的名字叫${this.name},今年${this.age}岁！`)
  }
}

const girl: Xiaojiejie = new Xiaojiejie("小红", 18, true);

console.log(girl)
girl.sayHello();