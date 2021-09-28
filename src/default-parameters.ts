export {};

//関数に値が渡されない場合orundefinedの場合、予め指定した引数を渡せるというもの

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
