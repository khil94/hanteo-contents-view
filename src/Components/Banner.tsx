import { IBanner } from "../types/types";
import "./Banner.scss";

export default function Banner(data: IBanner) {
  return (
    <div className="banner_outer_wrapper">
      <div className="banner_wrapper">
        <a
          href={data.url}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            height={140}
            className="banner_img"
            src={data.imgUrl}
            alt={data.imgUrl}
          />
        </a>
        <div
          className={`banner_processing ${data.isInProgress ? "" : "expired"}`}
        >
          {data.isInProgress ? "진행 중" : "종료"}
        </div>
      </div>
    </div>
  );
}
