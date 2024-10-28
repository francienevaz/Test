import React, { useState, useEffect } from 'react';
import kath from "../assets/kath.jpg";
import fantasy from "../assets/Fantasy.png";
import apex from "../assets/apex_octane.jpg";
import tron from "../assets/tron_legacy4.jpg";
import './Carousel.css';

const images = [
  kath, 
  fantasy,
  apex,
  tron
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <div className="gradient-overlay"></div>
        <svg
          className="custom-border"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L100,0 L100,80 Q90,90 80,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;