import React from "react";
import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";

import { MainCarouselData } from "./MainCarouselData";

// const responsive = {
//   0: { items: 1 },
//   568: { items: 2 },
//   1024: { items: 3 },
// };

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      role="presentation"
      className="cursor-pointer -z-10"
      src={item.image}
      alt={item.path}
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      //   disableDotsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCarousel;
