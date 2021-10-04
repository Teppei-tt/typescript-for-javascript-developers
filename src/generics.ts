export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return age;
// };

// Tは抽象的な型、型引数、Tは慣例的に使われる。（引数と戻り値が同じということ？）
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("Hello"));
console.log(echo<boolean>(true));

//  genericsを使わない関数の例
// class Mirror {
//   constructor(public value: number) {}

//   echo(): number {
//     return this.value;
//   }
// }

// console.log(new Mirror(123).echo());

// genericsを使う関数の例
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("TTT").echo());
console.log(new Mirror<boolean>(true).echo());
