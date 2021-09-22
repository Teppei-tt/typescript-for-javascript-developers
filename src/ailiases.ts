export {};

// 別名の最初の文字は大文字にする
type Mijiretu = string;

let fooStoring: string = "Hello";
let fooMojiretu: Mijiretu = "Hello";

const example1 = {
  name: "ham",
  age: 43,
  title: "aaa",
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "ham",
  age: 43,
};

// リバースエンジニアリング？？
type Profile2 = typeof example1;
