export interface ICategory {
  name: string;
  url: string;
}

export interface IBanner {
  url: string;
  imgUrl: string;
  isInProgress: boolean;
  detail: IBannerDetail;
}

export interface IBannerDetail {
  title: string;
  expireAt: Date;
  startAt: Date;
}

export interface IMockupData {
  url: string;
  thumbnailUrl: string;
  title: string;
}
