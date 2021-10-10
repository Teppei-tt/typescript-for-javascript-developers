export {};

// Record<K, T>

type Prefectures = "Tokyo" | "Chiba" | "Fukuoka";

type CovidInfectionInfo = {
  kanji_name: string;
  confirmed_caces: number;
};

const covid19Japan: Record<Prefectures, CovidInfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_caces: 1960 },
  Chiba: { kanji_name: "千葉", confirmed_caces: 249 },
  Fukuoka: { kanji_name: "福岡", confirmed_caces: 333 },
};
