import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// import "./styles.css";

const animation = { duration: 5000, easing: (t) => t };

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <Image
        className="keen-slider__slide number-slide1"
        src="/logos/1.png"
        height={50}
        width={50}
        alt="1"
      ></Image>

      <div className="keen-slider__slide number-slide2">
        <Image src="/logos/2.png" height={100} width={100} alt="1"></Image>
      </div>
      <div className="keen-slider__slide number-slide3">
        <Image src="/logos/3.png" height={100} width={100} alt="1"></Image>
      </div>
      <div className="keen-slider__slide number-slide4">
        <Image src="/logos/4.png" height={100} width={100} alt="1"></Image>
      </div>
      <div className="keen-slider__slide number-slide5">
        <Image src="/logos/5.png" height={100} width={100} alt="1"></Image>
      </div>
      <div className="keen-slider__slide number-slide6">
        <Image src="/logos/6.png" height={100} width={100} alt="1"></Image>
      </div>
    </div>
  );
}
