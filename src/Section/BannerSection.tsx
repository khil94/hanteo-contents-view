import Banner from "../Components/Banner";
import { BANNERS } from "../Constants/Enum";
import "./BannerSection.scss";

export default function BannerSection() {
  return (
    <div className="banner_section_wrapper">
      <div className="banner_list_wrapper">
        {BANNERS.map((v) => {
          return <Banner {...v} />;
        })}
      </div>
    </div>
  );
}
