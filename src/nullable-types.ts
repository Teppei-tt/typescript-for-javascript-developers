export {};

// nullを許容したいときは、ユニオン型で局所的に許容できないか試みる
let profile: { name: string; age: number | null } = {
  name: "Ham",
  age: null,
};
