export {};

// === only JS ====
// クラスの作成
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age:${this.age}`;
  }
}
// インスタンの作成(実態)
let taro = new Person("taro", 30);
// let hanako = new Person();
// =================

console.log(taro.profile());
