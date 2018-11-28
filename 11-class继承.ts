class XiaoJieJie3 {
  public sex: string;
  protected name: string;
  private age: number;
  public readonly isBeautiful: boolean;

  constructor(sex: string, name: string, age: number, isBeautiful: boolean) {
    this.sex = sex;
    this.name = name;
    this.age = age;
    this.isBeautiful = isBeautiful;
  }

  protected sayHello() {
    console.log(`我的名字叫${this.name},今年${this.age}岁！`)
  }
}

const girl3: XiaoJieJie3 = new XiaoJieJie3("女", "小姐姐", 18, true);

class Xiaojiejie4 extends XiaoJieJie3 {
  public intrest: string[];
  constructor(intrest: Array<string>) {
    super("人妖", "小姐姐2", 19, true);
    this.intrest = intrest;
  }

  public introduce() {
    super.sayHello();
    console.log(`我的爱好有：${this.intrest.join("、")}`)
  }
}

var renyao1: Xiaojiejie4 = new Xiaojiejie4(["钓凯子", "撩妹"]);
renyao1.introduce();