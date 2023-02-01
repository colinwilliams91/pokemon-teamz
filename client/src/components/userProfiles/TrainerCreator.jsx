import React, { useState, useEffect, createRef } from 'react';
import { TrainerCarItem } from '../Styled.jsx';
import Carousel from 'react-bootstrap/Carousel';


const TrainerCreator = () => {

  return (
    <>
      <h1>Hi</h1>
      <Carousel slide={false}>
        <Carousel.Item>
          <TrainerCarItem
            src=""
            alt="Head"
          />
          <Carousel.Caption>
            <h4>First slide label</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TrainerCreator;
