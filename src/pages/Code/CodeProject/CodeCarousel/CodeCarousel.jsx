import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import './CodeCarousel.css';

const CodeCarousel = ({slides}) => {
  const [currentImage, setCurrentImage] = useState('');
  const [length, setLength] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides) {
      setCurrentImage(slides[current]);
      setLength(slides.length);
    }
  }, [slides, current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? length - 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? 0 : current - 1);
  };

  return (
    <div className='CodeCarousel'>
      <div className='code-carousel-img'>
        { currentImage ?
            <img src={currentImage} /> :
            null
        }
      </div>
      <div className='code-carousel-controls'>
        { current > 0 ?
          <FaChevronLeft
            className='carousel-left-arrow'
            onClick={prevSlide}
            size={60} /> :
            null
        }
        { current >= 0 && current != length - 1 ?
          <FaChevronRight
            className='carousel-right-arrow'
            onClick={nextSlide}
            size={60} /> :
            null
        }
      </div>
      {/* <div className='code-carousel-indicators'>
        { images ?
          images.map((slide, i) => ( i < 7 ? <div key={i} /> : <></>)) : null
        }
      </div> */}
    </div>
  );
};

export default CodeCarousel;

CodeCarousel.propTypes = {
  slides: PropTypes.array,
};
