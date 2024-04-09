import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../constants/Enum";
import { RootState, selector } from "../store/CategoryStore";
import BannerSection from "./BannerSection";
import "./HeaderSection.scss";

export default function HeaderSection() {
  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();

  function categoryHandler(idx: number) {
    dispatch(selector(idx));
  }

  return (
    <header id="header">
      <div className="header_wrapper">
        {CATEGORIES.map((v, i) => {
          return (
            <div
              className={`header_category ${category === i ? "selected" : ""}`}
              key={"header_category_" + v.name}
              onClick={() => {
                categoryHandler(i);
              }}
            >
              {v.name}
            </div>
          );
        })}
      </div>
      <BannerSection />
    </header>
  );
}
