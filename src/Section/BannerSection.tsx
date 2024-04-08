import { useEffect, useRef, useState } from "react";
import Banner from "../Components/Banner";
import { BANNERS } from "../Constants/Enum";
import { IBanner } from "../types/types";
import "./BannerSection.scss";

export default function BannerSection() {
  const [idx, setIdx] = useState(1);
  const wrapper = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ReadonlyArray<IBanner>>(BANNERS);

  useEffect(() => {
    if (data.length !== 0) {
      setData([BANNERS[BANNERS.length - 1], ...BANNERS, BANNERS[0]]);
    }
  }, [BANNERS]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      console.log("timeout run");
      handleSlide(1);
    }, 3000);

    return () => clearTimeout(autoSlide);
  });

  useEffect(() => {
    if (wrapper.current !== null) {
      wrapper.current.style.transform = `translateX(-${idx}00%)`;
    }
  }, [idx]);

  console.log(idx);

  function moveCarousel(newIdx: number) {
    setTimeout(() => {
      setIdx(newIdx);
      if (wrapper.current !== null) {
        wrapper.current.style.transition = "";
      }
    }, 500);
  }

  function handleSlide(direction: number) {
    const newIdx = idx + direction;
    if (newIdx === BANNERS.length + 1) {
      moveCarousel(1);
    } else if (newIdx === 0) {
      moveCarousel(BANNERS.length);
    }

    setIdx((prev) => {
      console.log("added", newIdx);
      return prev + direction;
    });

    if (wrapper.current !== null) {
      wrapper.current.style.transition = "all 0.5s ease-in-out";
    }
  }

  return (
    <div className="banner_section_wrapper">
      <div className="banner_list_wrapper" ref={wrapper}>
        {data.map((v) => {
          return <Banner {...v} />;
        })}
      </div>
      <div className="banner_position_wrapper"></div>
    </div>
  );
}
