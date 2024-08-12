import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

function WorkSliderBtns() {
  var swiper = useSwiper();
  return (
    <div className="content-style">
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="button-slide"
      >
        {" "}
        <PiCaretLeftBold className="btn-style"/>
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        className="button-slide"
      >
        {" "}
        <PiCaretRightBold className="btn-style" />
      </button>
    </div>
  );
}

export default WorkSliderBtns;
