export {};

enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// //if write JS
// const MonthJs = {
//   January: 0,
//   February: 1,
// };

// console.log(MonthJs.January);
// console.log(MonthJs.February);

//スタートを1にしたい
enum MonthsStart1 {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(MonthsStart1.January);
console.log(MonthsStart1.February);
console.log(MonthsStart1.December);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFFF",
  GREEN = "#008000",
  BLUE = "0000FF",
  BLACK = "#00000",
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = "#FFFF00",
  GRAY = "#808080",
}

COLORS.YELLOW;
