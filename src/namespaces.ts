export {};

//namespace = 名前空間フォルダ的な関係？？
namespace Japanese {
  //moduleと同じで外で使う場合は、exportする
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("teppei");
console.log(me.name);

const you = new Japanese.Osaka.Person("tete");
console.log(you.name);

const jackson = new English.Person("Michael", "Joseph", "Jackson");
console.log(
  `The best favorite singer is ${jackson.firstName}・${jackson.middleName}・${jackson.lastName} for me`
);
