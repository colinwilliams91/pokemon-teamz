import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const BattleView = () => {
  const [favMon, setFavMon] = useState({});
  const [playerTeam, setPlayerTeam] = useState([]);
  const [rivalTeam, setRivalTeam] = useState([]);
  const [matchups, setMatchups] = useState({});

  const matchupPopulate = () => {
    setMatchups({
      fire: [ 'grass', 'bug', 'steel', 'ice', ],
      water: [ 'fire', 'rock', 'ground' ],
      grass: [ 'water', 'rock', 'ground' ],
      electric: [ 'water', 'flying' ],
      psychic: [ 'fighting', 'poison'],
      normal: [],
      fighting: ['normal', 'steel', 'ice', 'rock'],
      flying: [ 'grass', 'bug', 'fighting' ],
      rock: [ 'flying', 'ice', 'fire' ],
      ice: [ 'flying', 'ground', 'grass', 'dragon' ],
      steel: [ 'fairy', 'ice', 'rock' ],
      ground: [ 'electric', 'fire', 'steel', 'poison', 'rock' ],
      poison: [ 'grass', 'bug', 'fairy' ],
      bug: [ 'psychic', 'grass', 'dark' ],
      dark: [ 'psychic', 'ghost' ],
      ghost: ['psychic', 'ghost' ],
      fairy: [ 'fighting', 'dark', 'dragon' ],
      dragon: [ 'dragon' ],
    });
  };

  const teamGen = () => {
    console.log('Hardcoded an additional 5 mons onto player team. Resulting Team:');
    const generatedTeam = [
      favMon.favPokemonName,
      'meowth',
      'onix',
      'gyarados',
      'rhydon',
      'nidoqueen'
    ];
    console.log(generatedTeam);
    setPlayerTeam(generatedTeam);
  };

  const rivalGen = () => {
    if (playerTeam.length) {
      console.log('Hardcoded a team of banana dinosaurs to fight the player: ');
      const generatedTeam = [ 
        'tropius',
        'tropius',
        'tropius',
        'tropius',
        'tropius',
        'tropius'
      ];
      console.log(generatedTeam);
      setRivalTeam(generatedTeam);
    } else {
      console.log('You haven\'t gotten a team for battling yet!');
    }
   

  };

  const getFavorite = () => {
    axios.get('api/user/current')
      .then((result) => {
        console.log(result);
        const { favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 } = result.data;
        setFavMon({ favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 });
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
    console.log('DRAW LOGGED');
    //axios request to server to update user record in DB
  };

  const battleResolution = () => {

  };

  const testOpponent = [
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp'
  ];

  useEffect(()=>{
    getFavorite();
    matchupPopulate();
  }, []);

  return (
    <>
      <div> Battle Screen </div>
      <div> Get a team that includes your favorite Pokemon!</div>

      <div>Your favorite pokemon: {favMon.favPokemonName}</div>
      <img src={favMon.favPokemonImage} />
      <span>Type: </span>
      <span>{favMon.favPokemonType1}</span>
      {favMon.favPokemonType2 ? <span>/ {favMon.favPokemonType2}</span> : <></>}
      <p></p>
      <button onClick={teamGen}> Generate Team</button>
      <div> Your Team: INSERT GRAPHIC HERE</div>
      <div>YOU BATTLED WELL! Report the result below!</div>
      <button onClick={rivalGen}> Fight a rival!</button>
      <button onClick={handleWin}> Log a win</button>
      <button onClick={handleDraw}> Log a draw</button>

    </>
  );
};

export default BattleView;
