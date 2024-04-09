import { TouchEventHandler, useEffect, useRef, useState } from "react";
import Banner from "../Components/Banner";
import { BANNERS } from "../Constants/Enum";
import { IBanner } from "../types/types";
import "./BannerSection.scss";

export default function BannerSection() {
  const [idx, setIdx] = useState(1);
  const wrapper = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ReadonlyArray<IBanner>>(BANNERS);
  let touchStartX: number;
  let touchEndX: number;

  useEffect(() => {
    if (data.length !== 0) {
      setData([BANNERS[BANNERS.length - 1], ...BANNERS, BANNERS[0]]);
    }
  }, [BANNERS]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      console.log("timeout run");
      handleSlide(1);
    }, 5000);
    return () => clearTimeout(autoSlide);
  });

  useEffect(() => {
    if (wrapper.current !== null) {
      wrapper.current.style.transform = `translateX(-${idx}00%)`;
    }
  }, [idx]);

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
      return prev + direction;
    });

    if (wrapper.current !== null) {
      wrapper.current.style.transition = "all 0.5s ease-in-out";
    }
  }

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const currTouchX = e.nativeEvent.changedTouches[0].clientX;
    if (wrapper.current !== null) {
      wrapper.current.style.transition = "";
      wrapper.current.style.transform = `translateX(calc(-${idx}00% - ${
        (touchStartX - currTouchX) * 2 || 0
      }px))`;
    }
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    touchEndX = e.nativeEvent.changedTouches[0].clientX;
    console.log("touchstart, touchend", touchStartX, touchEndX);
    if (Math.abs(touchEndX - touchStartX) > 100) {
      if (touchStartX >= touchEndX) {
        handleSlide(1);
      } else {
        handleSlide(-1);
      }
    } else {
      if (wrapper.current !== null) {
        wrapper.current.style.transition = "all 0.5s ease-in-out";
        wrapper.current.style.transform = `translateX(calc(-${idx}00%))`;
      }
    }
  };

  return (
    <div className="banner_section_wrapper">
      <div
        className="banner_list_wrapper"
        ref={wrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((v, i) => {
          return <Banner key={`banner_${v.imgUrl}_${i}`} {...v} />;
        })}
      </div>
      <div className="banner_position_wrapper">
        {BANNERS.map((_, i) => {
          return (
            <div
              key={`banner_position_${i}`}
              className={`banner_position ${
                (i + 1) % 3 === idx % 3 ? "current_position" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
