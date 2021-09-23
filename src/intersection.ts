export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OtiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

//こんな型定義は嫌だ
// type ToWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

//Intersection型
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
