export {};

const reducer = (accmulator: number, curentValue: number) => {
  console.log({ accmulator, curentValue });
  return accmulator + curentValue;
};

// ...name  <= restparameter
const sum: (...values: number[]) => number = (...values: number[]) => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
