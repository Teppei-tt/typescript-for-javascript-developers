export {};

type DetailedProfile = {
  name: string;
  height: number;
  wight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "wight">;
// omit = 除外する
type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, "name" | "wight">;
type MySmallProfile = MyOmit;
