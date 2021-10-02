export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる。
//  * 途中で変更できない。
//  * 参照できる。
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる。
//  * 途中で変更できる。
//  * 参照できない。

class MyNumberCard {
  // メンバー変数？
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // method
  get owner() {
    return this._owner;
  }
  // method
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  // methd
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Teppei", 22523);
// card.owner = "TTT";
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 111111111111;
console.log(card.secretNumber);
