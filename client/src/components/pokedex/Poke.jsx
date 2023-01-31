import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {CardMedia, CardActions, Card, Button } from '@mui/material';
import { PokeEntry } from '../Styled.jsx';

const Poke = ({ selectPoke, getCards }) => {
  const [pokedex, setPokedex] = useState([]); //array of pokemon to be rendered

  useEffect(() => { //retrieve pokemon list and set pokedex state to that data
    axios.get('/api/pokedex')
      .then(pokemon => {
        setPokedex(pokemon.data);
      })
      .catch((err) => console.log('Pokemon Request FAILED:', err));
  }, []);

  const sendUserId = (id) => {
    axios.post(`/api/user/favpokemon/${id}`)
      .then(data => data)
      .catch(err => console.log('Error Favoriting Pokemon', err));
  };

  return pokedex.map((pokemon, id) => {
    id++;
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
      <PokeEntry>
        <Card>
          <CardMedia
            component='img'
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={`${pokemon.name} was not found!`} />
          <h4>{pokemon.name}</h4>
          <CardActions>
            <Button variant='contained' onClick={() => sendUserId(id)}>Add as Your Favorite</Button>
            <Button variant='contained' onClick={() => selectPoke(id)}>View {`${pokemon.name}'s`} Stats</Button>
            {/* <Button variant='contained' onClick={() => getCards(pokemon.name)}>View {`${pokemon.name}'s`} Cards</Button> */}
          </CardActions>
        </Card>
      </PokeEntry>
    );
  });
};

export default Poke;
