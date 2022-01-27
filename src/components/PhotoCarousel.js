import React, { useEffect, useState } from "react";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Hammer from "hammerjs";
import pic1 from "../assets/pratibha-patil.jpg";
import pic2 from "../assets/international-moot-court-competition.jpg";
import pic3 from "../assets/group-picture-2.jpg";

const PhotoCarousel = () => {
  const [picsrc, setPicsrc] = useState([pic1, pic2, pic3]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    const imgSlider = document.querySelector(".slider");

    const manager = new Hammer.Manager(imgSlider);
    const Swipe = new Hammer.Swipe();
    manager.add(Swipe);

    manager.on("swipe", function (e) {
      const direction = e.offsetDirection;

      if (direction === 4) {
        changeImg(-1);
        //setCurrentIndex((currentIndex + 1).mod(picsrc.length));
      }
      if (direction === 2) {
        changeImg(1);
        //setCurrentIndex((currentIndex + 1).mod(picsrc.length));
      }
    });
  });

  Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
  };

  const changeImg = (option) => {
    // console.log((currentIndex + option).mod(picsrc.length));
    return setCurrentIndex((currentIndex + option).mod(picsrc.length));
  };

  // const nextImg = () => {
  //   console.log((currentIndex + 1).mod(picsrc.length));
  //   return setCurrentIndex((currentIndex + 1).mod(picsrc.length));

  //Simple logic for noobs
  // if (currentIndex === picsrc.length - 1) {
  //   console.log(0);
  //   return setCurrentIndex(0);
  // }
  // console.log(currentIndex + 1);
  // return setCurrentIndex(currentIndex + 1);
  // };

  // const previousImg = () => {
  //   console.log((currentIndex - 1).mod(picsrc.length));
  //   return setCurrentIndex((currentIndex - 1).mod(picsrc.length));

  //Simple logic for noobs
  // if (currentIndex === 0) {
  //   console.log(picsrc.length - 1);
  //   return setCurrentIndex(picsrc.length - 1);
  // }
  // console.log(currentIndex - 1);
  // return setCurrentIndex(currentIndex - 1);
  // };

  return (
    <div className="flex slider">
      <section className="border-1 relative ">
        <img
          src={picsrc[currentIndex]}
          alt="carousel_pic1"
          className="w-screen"
        />
        <GrFormPrevious
          className="absolute top-1/2 left-0 bg-gray-500 opacity-30 hover:opacity-50 text-white w-6 h-6 md:h-10 md:w-10"
          onClick={() => changeImg(-1)}
        />
        <GrFormNext
          className="absolute top-1/2 right-0 bg-gray-500 opacity-30 hover:opacity-50 text-white w-6 h-6 md:h-10 md:w-10"
          onClick={() => changeImg(1)}
        />
      </section>
    </div>
  );
};

export default PhotoCarousel;
