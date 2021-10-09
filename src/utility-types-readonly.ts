export {};

type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: "ham",
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 30,
};

type YomitoriSenyou<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyouProfile = YomitoriSenyou<Profile>;
