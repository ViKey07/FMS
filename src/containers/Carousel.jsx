import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToNextSlide = () => {
  //   const newIndex = currentIndex + 1;
  //   if (newIndex >= images.length) {
  //     setCurrentIndex(0);
  //   } else {
  //     setCurrentIndex(newIndex);
  //   }
  // };

  const goToNextSlide = () => {
    const newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
    document.querySelector(".carousel button:last-of-type").classList.add("arrow-next");
    setTimeout(() => {
      document.querySelector(".carousel button:last-of-type").classList.remove("arrow-next");
    }, 500);
  };
  

  // const goToPreviousSlide = () => {
  //   const newIndex = currentIndex - 1;
  //   if (newIndex < 0) {
  //     setCurrentIndex(images.length - 1);
  //   } else {
  //     setCurrentIndex(newIndex);
  //   }
  // };

  const goToPreviousSlide = () => {
    const newIndex = currentIndex - 1;
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
    document.querySelector(".carousel button:first-of-type").classList.add("arrow-prev");
    setTimeout(() => {
      document.querySelector(".carousel button:first-of-type").classList.remove("arrow-prev");
    }, 500);
  };
  

  return (
    <div className="carousel">
      <button onClick={goToPreviousSlide}></button>
      <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
      <button onClick={goToNextSlide}></button>
    </div>
  );
};

export default Carousel;
