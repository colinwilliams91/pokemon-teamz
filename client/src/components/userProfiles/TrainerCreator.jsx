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

    <Carousel slide={false} indicators={false} onSelect={handleSelect}>
      <Carousel.Item as='div'>
        <TrainerCarItem
          src="https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/1_ezqvts.png"
          alt="First Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <TrainerCarItem
          src="https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/4_tmgl9y.png"
          alt="Second Slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <TrainerCarItem
          src="https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/2_wn0jws.png"
          alt="Trainer"
        />
      </Carousel.Item>
      <Carousel.Item>
        <TrainerCarItem
          src="https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/3_g5v7we.png"
          alt="Trainer"
        />
      </Carousel.Item>
    </Carousel>

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