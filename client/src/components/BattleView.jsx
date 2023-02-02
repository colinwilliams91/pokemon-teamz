import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const BattleView = () => {
  const [favMon, setFavMon] = useState({});
  const teamGen = () => {
    console.log('Generate a 5 \'Mon team and added the favorite pokemon to it.');
  };

  const getFavorite = () => {
    axios.get('api/user/current')
      .then((result) => {
        console.log(result);
        const { favoritePokemonImage, favPokemonName, favPokemonType1, favPokemonType2 } = result.data;
        setFavMon({ favoritePokemonImage, favPokemonName, favPokemonType1, favPokemonType2 });
      });
  };

  const handleWin = () => {
    console.log('WIN LOGGED');
    //axios request to server to update user record in DB
  };
  const handleLoss = () => {
    console.log('LOSS LOGGED');
    //axios request to server to update user record in DB
  };
  const handleDraw = () => {
    console.log('Draw LOGGED');
    //axios request to server to update user record in DB
  };

  const testTeam = [
    'charizard',
    'meowth',
    'onix',
    'gyarados',
    'rhydon',
    'nidoqueen'
  ];

  const testOpponent = [
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp'
  ];

  useEffect(getFavorite, []);

  return (
    <>
      <div> Battle Screen </div>
      <div> Get a team that includes your favorite Pokemon!</div>
      <div>Your favorite pokemon: {favMon.favPokemonName}</div>
      <button onClick={teamGen}> Generate Team</button>
      <div> Your Team: INSERT GRAPHIC HERE</div>
      <div>YOU BATTLED WELL! Report the result below!</div>
      <button onClick={handleWin}> Log a win</button>
      <button onClick={handleLoss}> Log a loss</button>
      <button onClick={handleDraw}> Log a draw</button>
      
    </>
  );
};

export default BattleView;
