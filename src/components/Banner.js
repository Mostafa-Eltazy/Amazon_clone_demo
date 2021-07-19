import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  const carousel_images = [
    "https://links.papareact.com/6ff",
    "https://links.papareact.com/gi1",
    "https://links.papareact.com/7ma",
  ];
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradiant-to-t from-grey-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={1000}
      >
        {carousel_images.map((i) => (
          <div>
            <img loading="lazy" src={i} alt=""></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
