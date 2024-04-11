import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Content from "../components/Content";
import SkeletonContent from "../components/SkeletonContent";
import { CATEGORIES } from "../constants/Enum";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { RootState } from "../store/CategoryStore";
import { IMockupData } from "../types/types";
import "./ContentListSection.scss";

export default function ContentListSection() {
  const [currPage, setCurrPage] = useState(0);
  const [data, setData] = useState<IMockupData[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const category = useSelector((state: RootState) => state.category.value);

  const handleObserve = () => {
    setCurrPage((prev) => prev + 1);
  };

  const getMockData = (url: string, page: number) => {
    setIsLoadingData(true);
    setTimeout(() => {
      fetch(`http://localhost:5173/${url}Mockup.json`)
        .then((res) => res.json())
        .then((target) => {
          const extraArr = target.slice(page * 10, (page + 1) * 10);
          if (extraArr.length === 0 && page >= 0) {
            observer.disconnect();
          }
          setData([...data, ...extraArr]);
          setIsLoadingData(false);
        });
    }, 3000);
  };

  useEffect(() => {
    getMockData(CATEGORIES[category].url, currPage);
  }, [currPage]);

  useEffect(() => {
    setData([]);
    setCurrPage(0);
    observer.connect();
  }, [category]);

  useEffect(() => {
    if (data.length === 0) {
      if (currPage === 0) {
        getMockData(CATEGORIES[category].url, currPage);
      }
    }
  }, [data]);

  const observer = useIntersectionObserver("#pivot", handleObserve);

  return (
    <div className="content_list_section_wrapper">
      <div className="content_list_title_wrapper">
        {CATEGORIES[category].name}
      </div>
      <div className="content_list_wrapper">
        {data.map((v, i) => {
          return (
            <Content key={`content_${v.title}_${i}`} data={v} rank={i + 1} />
          );
        })}
        {isLoadingData &&
          Array(10)
            .fill(0)
            .map((_, i) => <SkeletonContent key={`content_skeleton_${i}`} />)}
        <div id="pivot" className={`${isLoadingData ? "loading" : ""}`} />
      </div>
    </div>
  );
}
