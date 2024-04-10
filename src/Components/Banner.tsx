import { IBanner } from "../types/types";
import { getYYYYMMDDHHmm, makeEllipsis } from "../utils/generalFunctions";
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
            className="banner_img"
            src={"/main_banner_1_ko.webp"}
            alt={data.imgUrl}
          />
          <div className="banner_detail_wrapper">
            <div className="banner_detail_title">
              {makeEllipsis(data.detail.title, 27)}
            </div>
            <div className="banner_detail_date">{`${getYYYYMMDDHHmm(
              data.detail.startAt
            )} ~ ${getYYYYMMDDHHmm(data.detail.expireAt)}(KST)`}</div>
          </div>
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
