import React, { useState } from "react";

export default function ImgCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  let handlePictures = (inc) => {
    let result = current + inc;
    if (result < 0) {
      result = images.length - 1;
    } else if (result === images.length) {
      result = 0;
    }
    setCurrent(result);
  };
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide rounded image-carousel"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item  ${index === current ? " active" : ""}`}
          >
            <img className="d-block w-100" src={img} alt="" />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
        onClick={() => handlePictures(-1)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        role="button"
        data-slide="next"
        onClick={() => handlePictures(1)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
