export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 4));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// infer = 推論する
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
