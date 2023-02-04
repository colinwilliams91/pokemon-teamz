import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const BattleView = () => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState([]); // should probably live in a child component
  const [rival, setRival] = useState({}); // should probably live in a child component
  const [matchups, setMatchups] = useState({});
  const [playerActive, setPlayerActive] = useState({}); // should probably live in a child component
  const [rivalActive, setRivalActive] = useState({}); // should probably live in a child component

  const matchupPopulate = () => {
    setMatchups({
      fire: ['grass', 'bug', 'steel', 'ice',],
      water: ['fire', 'rock', 'ground'],
      grass: ['water', 'rock', 'ground'],
      electric: ['water', 'flying'],
      psychic: ['fighting', 'poison'],
      normal: [],
      fighting: ['normal', 'steel', 'ice', 'rock'],
      flying: ['grass', 'bug', 'fighting'],
      rock: ['flying', 'ice', 'fire'],
      ice: ['flying', 'ground', 'grass', 'dragon'],
      steel: ['fairy', 'ice', 'rock'],
      ground: ['electric', 'fire', 'steel', 'poison', 'rock'],
      poison: ['grass', 'bug', 'fairy'],
      bug: ['psychic', 'grass', 'dark'],
      dark: ['psychic', 'ghost'],
      ghost: ['psychic', 'ghost'],
      fairy: ['fighting', 'dark', 'dragon'],
      dragon: ['dragon'],
    });
  };

  const getFavorite = () => {
    axios.get('api/user/current')
      .then((result) => {
        console.log(result);
        const { _id, username, wins, losses, draws, favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 } = result.data; //deconstruction
        setPlayer({ _id, username, wins, losses, draws, favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 }); //object shorthand
      });
  };

  useEffect(() => {
    getFavorite();
    matchupPopulate();
  }, []);

  const teamGen = () => {
    console.log('Generated an additional 5 mons onto player team. Resulting Team:');
    const generatedTeam = [
      player.favPokemonName || Math.floor(Math.random() * (151) + 1), // handle case where user without favorite pokemon navigates to battle view
      Math.floor(Math.random() * (151) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
    ];
    console.log(generatedTeam);
    setPlayerTeam(generatedTeam);
  };

  const rivalGen = () => {
    if (playerTeam.length) {
      console.log('Hardcoded a team of banana dinosaurs to fight the player: ');
      const generatedRival = {};
      const rivals = { 
        BananaMan: ['tropius', 'tropius', 'tropius', 'tropius', 'tropius', 'tropius' ],
        AwesomeAngler: [ 'magikarp', 'magikarp', 'magikarp', 'magikarp', 'magikarp', 'magikarp' ],
        ArwingAce: ['charizard', 'meowth', 'onix', 'beedrill', 'rhydon', 'magneton'],
        TrainerZazu: ['likitung', 'tangela', 'mr-mime', 'farfetchd', 'psyduck', 'seel'],
        SaltySeagull: ['ponyta', 'staryu', 'vulpix', 'gengar', 'eevee', 'bulbasaur'],
        GhostHammer: ['mimikyu-disguised', 'gourgeist-average', 'palossand', 'phantump', 'litwick', 'snorlax'],
        FatTubBetty: ['mr-mime', 'probopass', 'ludicolo', 'jynx', 'shuckle', 'pelipper'],
        PalletKid: ['pikachu', 'butterfree', 'pidgeotto', 'bulbasaur', 'charmander', 'squirtle' ],
      };
      generatedRival.name = Object.keys(rivals)[ Math.floor(Math.random() * (7 - 0) + 0) ];
      generatedRival.team = rivals[generatedRival.name];
      
      console.log(generatedRival);
      setRival(generatedRival);
    } else {
      console.log('You haven\'t gotten a team for battling yet!');
    }
  };

  const handleResult = (battleResult) => {
    const battleRecord = {};
    switch (battleResult) {
    case 'win':
      battleRecord.wins = player.wins + 1;
      setPlayer({...player, wins: player.wins + 1 });
      break;
    case 'loss':
      battleRecord.losses = player.losses + 1;
      setPlayer({...player, losses: player.losses + 1 });
      break;
    case 'draw':
      battleRecord.draws = player.draws + 1;
      setPlayer({...player, draws: player.draws + 1 });
      break;
    }
    console.log('RESULT LOGGED: ', battleResult, battleRecord );
    //axios request to server to update user record in DB
    axios.patch('api/user/updateRecords', battleRecord)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => { console.error(err); });
  };

  const battleResolution = (playerActive, rivalActive) => {
    playerActive = {name: 'charizard', statTotal: 534, types: ['fire', 'flying'], canBattle: true};
    rivalActive = {name: 'geodude', statTotal: 300, types: ['rock', 'ground'], canBattle: true};
    let playerMulti = 1;
    let rivalMulti = 1;
    if (matchups[playerActive.types[0]].includes(rivalActive.type1)) { playerMulti += 0.25; }
    if (matchups[playerActive.types[0]].includes(rivalActive.type2)) { playerMulti += 0.25; }
    if (matchups[playerActive.types[1]].includes(rivalActive.type1)) { playerMulti += 0.25; }
    if (matchups[playerActive.types[1]].includes(rivalActive.type2)) { playerMulti += 0.25; }
    if (matchups[rivalActive.types[0]].includes(playerActive.type1)) { rivalMulti += 0.25; }
    if (matchups[rivalActive.types[0]].includes(playerActive.type2)) { rivalMulti += 0.25; }
    if (matchups[rivalActive.types[1]].includes(playerActive.type1)) { rivalMulti += 0.25; }
    if (matchups[rivalActive.types[1]].includes(playerActive.type2)) { rivalMulti += 0.25; }
    
    if (playerActive.statTotal * playerMulti < rivalActive.statTotal * rivalMulti) {
      playerActive.canBattle = false;
    } else {
      rivalActive.canBattle = false;
      setRivalActive();
    }
    // set active pokemon to null
    setPlayerActive({});
    // set rival pokemon to next in array
    setRivalActive({});
    // call a function that checks state and moves to declare a winner
  };

  useEffect(() => {
    getFavorite();
    matchupPopulate();
  }, []);

  return (
    <>
      <div> Welcome to the Battle Arena, {player.username || 'Player'}</div>
      <div> Generate a team to take into battle below. The team will always include your favorite Pokemon!</div>
      <div>Your favorite pokemon: {player.favPokemonName}</div>
      <img src={player.favPokemonImage} />
      <span>Type: </span>
      <span>{player.favPokemonType1}</span>
      {player.favPokemonType2 ? <span>/ {player.favPokemonType2}</span> : <></>}
      <p></p>
      <button onClick={teamGen}> Generate Team</button>
      <div> Your Team: INSERT GRAPHIC HERE</div>
      <div>YOU BATTLED WELL! Report the result below!</div>
      <button onClick={rivalGen}> Fight a rival!</button>
      <button onClick={() => { handleResult('win'); }}> Log a win</button>
      <button onClick={() => { handleResult('loss'); }}> Log a loss</button>
    </>
  );
};

export default BattleView;
