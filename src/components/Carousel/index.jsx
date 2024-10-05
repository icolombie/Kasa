import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import next from "../../assets/next.png"
import prev from "../../assets/prev.png"

const CustomPrevArrow = ({ onClickHandler }) => (
  <button type="button" onClick={onClickHandler} className="custom-prev-arrow">
    <img src={prev} alt='Previous' />
  </button>
);

const CustomNextArrow = ({ onClickHandler }) => (
  <button type="button" onClick={onClickHandler} className="custom-next-arrow">
    <img src={next} alt='Next' />
  </button>
);

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        selectedItem={currentIndex}
        onChange={handleSlideChange}
        renderArrowPrev={() => images.length > 1 && <CustomPrevArrow onClickHandler={handlePrevClick} />}
        renderArrowNext={() => images.length > 1 && <CustomNextArrow onClickHandler={handleNextClick} />}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
      {images.length > 1 && (
      <p className="custom-indicator">{`${currentIndex + 1}/${images.length}`}</p>
      )}
    </div>
  );
};

export default ImageCarousel;