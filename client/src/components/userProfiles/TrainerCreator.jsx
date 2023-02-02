import { TrainerCarItem, TrainerHair, TrainerFace, TrainerBody } from '../Styled.jsx';
import React, { useState, useEffect, createRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';


const TrainerCreator = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios.get('/cloudinary')
      .then(results => console.log(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <TrainerHair>
        <Carousel slide={false} indicators={false} onSelect={handleSelect}>
          <Carousel.Item>
            <TrainerCarItem
              src=""
              alt="Hair"
            />
          </Carousel.Item>
        </Carousel>
      </TrainerHair>
      <TrainerFace>
        <Carousel slide={false} indicators={false} onSelect={handleSelect}>
          <Carousel.Item>
            <TrainerCarItem
              src=""
              alt="Face"
            />
          </Carousel.Item>
        </Carousel>
      </TrainerFace>
      <TrainerBody>
        <Carousel slide={false} indicators={false} onSelect={handleSelect}>
          <Carousel.Item>
            <TrainerCarItem
              src=""
              alt="Body"
            />
          </Carousel.Item>
        </Carousel>
      </TrainerBody>
    </>
  );
};

export default TrainerCreator;


{ /* <Carousel.Item>
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
        <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a> */ }

// To modify next/perv buttons...
// <a class="carousel-control-prev" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-prev-icon"></span><span class="visually-hidden">Previous</span></a>
// <a class="carousel-control-next" role="button" tabindex="0" href="#"><span aria-hidden="true" class="carousel-control-next-icon"></span><span class="visually-hidden">Next</span></a>