import { TrainerCarItem, TrainerHair, TrainerFace, TrainerBody } from '../Styled.jsx';
import React, { useState, useEffect, createRef, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TrainerContext } from './infoSect.jsx';
import Cloudinary from './Cloudinary.json';
import axios from 'axios';

const TrainerCreator = () => {

  const [index, setIndex] = useState(0);
  const { character, setCharacter, setInputVals, inputVals } = useContext(TrainerContext);
  const avatarRef = createRef('');

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSave = (e) => {
    avatarRef.current = e.target.src;
    console.log('Avatar String', avatarRef.current);
    setCharacter(avatarRef.current);
    axios.patch('api/user/updateRecords', { trainer: avatarRef.current })
      .then((results) => {
        console.log('SUCCESS sending TRAINER AXIOS PATCH', results);
      })
      .catch(err => {
        console.log('Error AXIOS PATCH trainer', err);
      });
  };

  useEffect(() => {
    axios.get('/cloudinary')
      .then(results => console.log(results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {/* <h2>Click Avatar to Save!</h2> */}
      <Carousel slide={false} indicators={false} onSelect={handleSelect} interval={null}>
        {
          Cloudinary.avatars.map((url, i) => {
            return <Carousel.Item key={i}>
              <TrainerCarItem
                onClick={(e) => {
                  handleSave(e);
                  setInputVals(() => ({ create: !inputVals.create }));
                }}
                id={i}
                src={url}
                alt='First Slide'
              />
            </Carousel.Item>;
          })
        }
      </Carousel>
    </>
  );
};

export default TrainerCreator;


{ /* <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='0'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/1_ezqvts.png'
        alt='First Slide'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='1'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/4_tmgl9y.png'
        alt='Second Slide'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='2'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/2_wn0jws.png'
        alt='Trainer'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='3'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/3_g5v7we.png'
        alt='Trainer'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='3'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544973/Trainers/7_sy9lok.png'
        alt='Trainer'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='3'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544964/Trainers/6_ipxcim.png'
        alt='Trainer'
      />
    </Carousel.Item>
    <Carousel.Item>
      <TrainerCarItem
        onClick={(e) => handleSave(e)}
        id='3'
        src='https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544968/Trainers/5_w2rcno.png'
        alt='Trainer'
      />
  </Carousel.Item> */ }
