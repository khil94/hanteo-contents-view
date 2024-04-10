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
    detail: {
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전조사 투표",
      startAt: new Date(2020, 1, 8, 10, 0),
      expireAt: new Date(2020, 3, 8, 17, 0),
    },
  },
  {
    url: "",
    imgUrl: "2",
    isInProgress: false,
    detail: {
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전조사 투표",
      startAt: new Date(2020, 1, 8, 10, 0),
      expireAt: new Date(2020, 3, 8, 17, 0),
    },
  },
  {
    url: "",
    imgUrl: "3",
    isInProgress: true,
    detail: {
      title: "[M COUNTDOWN] 10월 2주차 엠카 사전조사 투표",
      startAt: new Date(2020, 1, 8, 10, 0),
      expireAt: new Date(2020, 3, 8, 17, 0),
    },
  },
];
