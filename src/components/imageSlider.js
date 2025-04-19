import React, { useState, useEffect } from "react";
import "../ImageSlider.css";
import image1 from "../images/founder-hub.jpeg";
import image2 from "../images/aws-startup.jpeg";
import image3 from "../images/nvidia.jpeg";
import image7 from "../images/bricss.png";
import image6 from "../images/venturee.png";
import image5 from "../images/tidess.png";
import { useTheme, useMediaQuery } from "@material-ui/core";

const ImageSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: image1, alt: "Founder Hub" },
    { src: image2, alt: "AWS Startup" },
    { src: image3, alt: "NVIDIA" },
    { src: image5, alt: "Tides" },
    { src: image6, alt: "Venturee" },
    { src: image7, alt: "BRICSS" },
  ];

  const getVisibleSlides = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isLaptop) return 3;
    return 4;
  };

  const visibleSlides = getVisibleSlides();

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

  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        container: {
          padding: '20px',
          marginTop: '20px',
        },
        heading: {
          fontSize: '24px',
          lineHeight: '28px',
          marginBottom: '20px',
        },
        slide: {
          padding: '10px',
        },
        image: {
          maxWidth: '200px',
          height: 'auto',
        }
      };
    } else if (isTablet) {
      return {
        container: {
          padding: '30px',
          marginTop: '30px',
        },
        heading: {
          fontSize: '28px',
          lineHeight: '32px',
          marginBottom: '25px',
        },
        slide: {
          padding: '15px',
        },
        image: {
          maxWidth: '250px',
          height: 'auto',
        }
      };
    } else if (isLaptop) {
      return {
        container: {
          padding: '40px',
          marginTop: '40px',
        },
        heading: {
          fontSize: '32px',
          lineHeight: '36px',
          marginBottom: '30px',
        },
        slide: {
          padding: '20px',
        },
        image: {
          maxWidth: '300px',
          height: 'auto',
        }
      };
    } else {
      return {
        container: {
          padding: '50px',
          marginTop: '50px',
        },
        heading: {
          fontSize: '36px',
          lineHeight: '40px',
          marginBottom: '35px',
        },
        slide: {
          padding: '25px',
        },
        image: {
          maxWidth: '350px',
          height: 'auto',
        }
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <div className="slider-section" style={styles.container}>
      <h2 className="slider-heading" style={styles.heading}>Supported By</h2>
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.concat(images).map((image, index) => (
            <div
              key={index}
              className="slide"
              style={{
                flex: `0 0 calc(100% / ${visibleSlides})`,
                ...styles.slide
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="slider-image" 
                style={styles.image}
              />
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
