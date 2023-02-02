import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia } from '../../mui/index.jsx';

const MarketEntries = ({ card }) => (
  <Card sx={{ maxWidth: 275 }}>
    <h2>{card.cardName}</h2>
    <CardMedia
      component='img'
      image={card.image}
      alt={`${card.cardName} was not found!`}
    />
    <CardContent>
    </CardContent >
    <CardActions>
      <Link to={'/compose:' + card.userId} >
        <Button variant='contained'>Contact User</Button>
      </Link>
    </CardActions >
  </Card >
);

export default MarketEntries;
