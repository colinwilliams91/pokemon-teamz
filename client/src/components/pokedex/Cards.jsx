
import axios from 'axios';
import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

//moved 2 unsused style components to Styled.jsx - CardSect, PokeCard

const Cards = ({ pokeCards, changePokeCardDisplay }) => {
  // const [cardToAdd, setCardToAdd] = useState({});

  const addCard = card => {
    console.log(card);

    axios.post('/api/deck', { params: { q: card } })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Button variant='contained' onClick={() => changePokeCardDisplay(false)}>x</Button>
      <div>
        {pokeCards.map(card => {
          return (
            <Card sx={{ maxWidth: 275 }}>
              <h2>{card.name}</h2>
              <CardMedia
                component='img'
                image={card.images.small}
                alt={`${card.name} was not found!`}
              />
              <CardActions>
                <Button variant='contained' onClick={() => { handleAddCard(card); }}>
                  Add {card.name} to Marketplace
                </Button>
              </CardActions >
            </Card >
          );
        })}
      </div>
    </div>
  );
};



export default Cards;
