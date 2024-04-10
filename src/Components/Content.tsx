import { IMockupData } from "../types/types";
import "./Content.scss";

interface IProp {
  data: IMockupData;
  rank: number;
}
export default function Content({ data, rank }: IProp) {
  return (
    <div className="content_wrapper">
      <a className="content" href={data.url}>
        <img width={48} src={data.thumbnailUrl} />
        <div className="content_detail">
          <div className="content_rank_wrapper">
            <span>{rank}</span>
            <span>-</span> {/* 순위변동란 */}
          </div>
          <div className="content_title">{data.title}</div>
        </div>
      </a>
    </div>
  );
}
