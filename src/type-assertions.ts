export {};

let name: any = "Ham";

// 型アサーション asを使う方法 と <>を使う方法  <>は非推奨
let length = (<string>name).length;

// length = "foo";
