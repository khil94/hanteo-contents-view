import { IBanner } from "../types/types";
import "./Banner.scss";

export default function Banner(data: IBanner) {
  return (
    <div className="banner_wrapper">
      <a href={data.url}>
        <img height={160} className="banner_img" src={data.imgUrl} />
      </a>
      <div
        className={`banner_processing ${data.isInProgress ? "" : "expired"}`}
      >
        {data.isInProgress ? "진행 중" : "종료"}
      </div>
    </div>
  );
}
