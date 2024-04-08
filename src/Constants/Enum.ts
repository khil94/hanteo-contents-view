import { IBanner, ICategory } from "../types/types";

export const CATEGORIES: ReadonlyArray<ICategory> = [
  {
    name: "차트",
  },
  {
    name: "Whook",
  },
  {
    name: "이벤트",
  },
  {
    name: "뉴스",
  },
  {
    name: "스토어",
  },
  {
    name: "충전소",
  },
];

export const BANNERS: ReadonlyArray<IBanner> = [
  {
    url: "",
    imgUrl: "",
    isInProgress: true,
  },
  {
    url: "",
    imgUrl: "",
    isInProgress: false,
  },
  {
    url: "",
    imgUrl: "",
    isInProgress: true,
  },
];
