export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age:${this.age}`;
  }
}
let taro = new Person("taro", 30, "Japan");

// extends A Aのクラスを継承する際に使う
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    //親クラスから呼び出す
    super(name, age, nationality);
  }

  profile(): string {
    // private はエラー、protected はOK
    return `name: ${this.name}, age:${this.age}, nationality: ${this.nationality}`;
  }
}
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
