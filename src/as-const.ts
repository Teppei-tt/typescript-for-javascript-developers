export {};

let name = "teppei";

name = "Ham";

let nickname = "ham" as const;
nickname = "ham";

let profile = {
  name: "Teppei",
  height: 164,
} as const;

// profile.name = "ham";
// profile.height = 170;
