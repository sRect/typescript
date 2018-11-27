class Xiaojiejie2 {
  public sex: string;
  protected name: string;
  private age: number;
  public readonly isBeautiful: boolean; // 我不管我最美

  constructor(sex: string, name: string, age: number, isBeautiful: boolean) {
    this.sex = sex;
    this.name = name;
    this.age = age;
    this.isBeautiful = isBeautiful;
  }

  sayHello() {
    console.log(`我的名字叫${this.name},今年${this.age}岁！`)
  }
}

const girl2: Xiaojiejie2 = new Xiaojiejie2("女", "小红", 18, true);

console.log(girl2)
girl2.sayHello();
console.log(girl2.sex)
console.log(girl2.name)
console.log(girl2.age)
console.log(girl2.isBeautiful)

girl2.sex = "renyao";
girl2.name = 100;
girl2.isBeautiful = false;

console.log(girl2.sex)
console.log(girl2.name)
console.log(girl2.isBeautiful)