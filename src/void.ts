export {};

// return文が存在しない関数
// void型：関数間にreturnが存在しない場合に使う型
function returnNothing(): void {
  console.log("I don't return anything");
}

console.log(returnNothing());
