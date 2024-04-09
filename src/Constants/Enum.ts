import { IBanner, ICategory } from "../types/types";

export const CATEGORIES: ReadonlyArray<ICategory> = [
  {
    name: "차트",
    url: "Chart",
  },
  {
    name: "Whook",
    url: "Whook",
  },
  {
    name: "이벤트",
    url: "Event",
  },
  {
    name: "뉴스",
    url: "News",
  },
  {
    name: "스토어",
    url: "Store",
  },
  {
    name: "충전소",
    url: "Charge",
  },
];

export const BANNERS: ReadonlyArray<IBanner> = [
  {
    url: "",
    imgUrl: "1",
    isInProgress: true,
  },
  {
    url: "",
    imgUrl: "2",
    isInProgress: false,
  },
  {
    url: "",
    imgUrl: "3",
    isInProgress: true,
  },
];
