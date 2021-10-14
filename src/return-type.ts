export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 4));
type ReturnTypeFromAdd = ReturnType<typeof add>;
