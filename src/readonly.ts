export {};

class VisaCard {
  // readonly は public を含むが、自明ではないので書いた方が良い
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("teppei");
console.log(myVisaCard.owner);
// myVisaCard.owner = "hamu";
