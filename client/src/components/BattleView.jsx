import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const BattleView = () => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState([]);
  const [rival, setRival] = useState({});
  const [matchups, setMatchups] = useState({});

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
  // add stateSetter parameter...
  const fetchTeam = (team) => {
    team.forEach(pokemon => {
      axios.post('/team', {
        data: {
          pokeLookup: pokemon
        }
      })
        .then(fetchedPokemon => {
          // check if stateSetter === player || rival
          setPlayerTeam(prevTeam => [...prevTeam, fetchedPokemon.data]);
          // build out logic to fire setRival state change...
        })
        .catch(err => console.error('Error retrieving pokemon from server', err));
    });
  };

  useEffect(() => {
    getFavorite();
    matchupPopulate();
  }, []);

  const teamGen = () => {
    console.log('Generated an additional 5 mons onto player team. Resulting Team:');

    const generatedTeam = [
      player.favPokemonName,
      Math.floor(Math.random() * (151) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
    ];
    console.log(generatedTeam);
    // fetchTeam(generatedTeam, setPlayerTeam)
    fetchTeam(generatedTeam);
  };

  console.log('TEAM COMPILED SUCCESS', playerTeam);
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
      // fetchTeam(generatedRival.team, setRival)
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

  const battleResolution = () => {
    console.log('insert battle mechanics here');
  };

  const testOpponent = [
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp',
    'magikarp'
  ];

  useEffect(() => {
    getFavorite();
    matchupPopulate();
  }, []);

  return (
    <>
      <div> Battle Screen </div>
      <div> Get a team that includes your favorite Pokemon!</div>
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
