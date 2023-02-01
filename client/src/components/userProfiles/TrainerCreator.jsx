import React, { useState, useEffect, createRef } from 'react';
import { TrainerCarItem } from '../Styled.jsx';
import Carousel from 'react-bootstrap/Carousel';


const TrainerCreator = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel slide={false} indicators={false} onSelect={handleSelect}>
        <Carousel.Item>
          <TrainerCarItem
            src=""
            alt="Hair"
          />
        </Carousel.Item>
        <a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
        <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>
        <Carousel.Item>
          <TrainerCarItem
            src=""
            alt="Head"
          />
        </Carousel.Item>
        <a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
        <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>
        <Carousel.Item>
          <TrainerCarItem
            src=""
            alt="Body"
          />
        </Carousel.Item>
        <a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
        <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>
      </Carousel>
    </>
  );
};

export default TrainerCreator;
