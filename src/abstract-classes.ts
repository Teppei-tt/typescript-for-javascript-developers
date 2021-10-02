export {};

// 抽象メソッド
abstract class Animal {
  abstract cry(): string;
}

// 抽象クラス
class Lion extends Animal {
  cry() {
    return "roar";
  }
}

// 抽象クラス
class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
