import React, { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.png";

const images = [img1, img2, img3, img4];

const CarouselDefault = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative z-10 h-auto w-full object-cover">
      {" "}
      {/* Set z-index lower */}
      <div className="relative z-0 h-[763px] w-full overflow-hidden">
        <div
          className="z-0 flex h-fit w-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="z-0 h-full w-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 z-0 flex -translate-x-1/2 transform space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ring-2 ring-white ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            } z-0`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;
