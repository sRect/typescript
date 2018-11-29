// 面向对象编程-命名空间
namespace xiaomi {
  export class Mobile {
    public readonly name: string = '小米';
    public price: number;
    constructor(price: number) {
      this.price = price
    }

    introduce() {
      console.log(`${this.name}手机，价格${this.price}`)
    }
  }
}

namespace iPhone {
  export class Mobile {
    public readonly name: string = '苹果';
    public price: number;
    constructor(price: number) {
      this.price = price
    }

    introduce() {
      console.log(`${this.name}手机，价格${this.price}`)
    }
  }
}

const andriod: xiaomi.Mobile = new xiaomi.Mobile(2499);
const ios: iPhone.Mobile = new iPhone.Mobile(12000);

andriod.introduce();
ios.introduce();