export {};

// （これまで）classを作成→インスタンスを作成          動的
//  クラスを初期化しない？ Newでインスタンスを作らない  静的

class Me {
  // 先頭にstaticをつけることで静的メンバにする(わざわざインスタンスを作らなくても呼び出せる)
  static isProgrammer: boolean = true;
  static firstName: string = "Teppei";
  static lastName: string = "TT";

  // method
  static work() {
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
