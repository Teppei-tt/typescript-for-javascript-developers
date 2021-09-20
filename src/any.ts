import axios from "axios";

export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios
  .get("https://udemy-utils.herokuapp.com/api/v1/articles?token=token123")
  .then(function (response) {
    // 個人的な予想
    // let data: (string | number)[] = response.data;

    // 独自の型を作成した
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    // 正解
    let data: Article[] = response.data;
    console.log(data);
  });
