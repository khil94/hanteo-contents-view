import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import { CATEGORIES } from "../constants/Enum";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { RootState, selector } from "../store/CategoryStore";
import { IMockupData } from "../types/types";
import "./ContentListSection.scss";

export default function ContentListSection() {
  const [currPage, setCurrPage] = useState(-1);
  const [data, setData] = useState<IMockupData[]>([]);

  useIntersectionObserver("#pivot", () => {
    setCurrPage((prev) => prev + 1);
  });
  const category = useSelector((state: RootState) => state.category.value);
  const dispatch = useDispatch();

  const getMockData = (url: string, page: number) => {
    fetch(`http://localhost:5173/${url}Mockup.json`)
      .then((res) => res.json())
      .then((target) => {
        console.log(
          "target",
          currPage,
          target.slice(page * 20, (page + 1) * 20)
        );
        setData([...data, ...target.slice(page * 10, (page + 1) * 10)]);
      });
  };

  useEffect(() => {
    getMockData(CATEGORIES[category].url, currPage);
  }, [currPage]);

  function categoryHandler(idx: number) {
    dispatch(selector(idx));
  }
  return (
    <div className="content_list_section_wrapper">
      {CATEGORIES[category].name}
      <div className="content_list_wrapper">
        {data.map((v, i) => {
          return <Content key={`content_${v.title}_${i}`} {...v} />;
        })}
      </div>
      <div id="pivot"></div>
    </div>
  );
}
