import { IMockupData } from "../types/types";
import "./Content.scss";

export default function Content(data: IMockupData) {
  return (
    <div className="content_wrapper">
      <a className="content" href={data.url}>
        <img width={48} src={data.thumbnailUrl} />
        <div className="content_title">{data.title}</div>
      </a>
    </div>
  );
}
