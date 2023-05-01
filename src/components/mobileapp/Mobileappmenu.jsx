import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Mobileapp = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    const length = slides.length;



  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.src} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

// export default Mobileapp;