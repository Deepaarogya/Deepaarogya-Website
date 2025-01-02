import React, { useState, useEffect } from "react";
import "../ImageSlider.css";
import image1 from "../images/founder-hub.jpeg";
import image2 from "../images/aws-startup.jpeg";
import image3 from "../images/nvidia.jpeg";
import image4 from "../images/eureka.jpeg";
import image5 from "../images/bricss.jpeg";
import image6 from "../images/venturee.jpeg";
import image7 from "../images/tidess.jpeg";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
    { src: image5, alt: "Image 5" },
    { src: image6, alt: "Image 6" },
    { src: image7, alt: "Image 7" },
  ];

  const visibleSlides = 3;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto sliding
  useEffect(() => {
    const timer = setInterval(goToNext, 3000); // Slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-section">
      <h2 className="slider-heading">Supported By</h2>
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            transform: `translateX(-${
              (currentIndex * 100) / visibleSlides
            }%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                flex: `0 0 calc(100% / ${visibleSlides})`,
              }}
            >
              <img src={image.src} alt={image.alt} className="slider-image" />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="arrow prev" onClick={goToPrev}>
          &#9664;
        </button>
        <button className="arrow next" onClick={goToNext}>
          &#9654;
        </button>


        
      </div>
    </div>
  );
};

export default ImageSlider;
