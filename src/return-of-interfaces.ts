export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  inazun(): void;
}

interface Sensi {
  kougeki(): void;
}

// 実装する（implement）
class Jiro implements Kenja, Sensi {
  inazun(): void {
    console.log("inazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.inazun();
jiro.kougeki();
