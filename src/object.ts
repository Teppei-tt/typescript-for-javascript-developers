export {};

// 成約のあまいアノテーション
let profile1: object = { name: "hamu" };
profile1 = { birthYear: 1976 };

// 成約のきびしいアノテーション
let profile2: {
  name: string;
} = { name: "teppei" };
profile2 = { name: "kyou" };
