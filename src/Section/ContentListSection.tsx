import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../Components/Content";
import { CATEGORIES } from "../Constants/Enum";
import { MOCKUP_LIST } from "../Constants/Mockup";
import { RootState, selector } from "../Store/CategoryStore";
import "./ContentListSection.scss";

export default function ContentListSection() {
  const currPage = useRef(0);

  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();

  function categoryHandler(idx: number) {
    dispatch(selector(idx));
  }
  return (
    <div className="content_list_section_wrapper">
      {CATEGORIES[category].name}
      <div className="content_list_wrapper">
        {MOCKUP_LIST.map((v) => {
          return <Content {...v} />;
        })}
      </div>
    </div>
  );
}
