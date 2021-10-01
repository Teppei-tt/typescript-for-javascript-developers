export {};

//contructorにメンバーの初期化処理
// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//書き換え (初期化処理の省略？)
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("teppei", 20);
console.log({ me });
