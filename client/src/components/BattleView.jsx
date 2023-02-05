import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { BattleHeadContainer, BattleTextDiv, BattleImage, BattleButton, BattleContainerContainer, BattleField, BattleFieldText, BattleFieldSprites, BattleFieldDiv } from './Styled.jsx';

const BattleView = () => {
  const [player, setPlayer] = useState({});
  const [playerTeam, setPlayerTeam] = useState([]); // should probably live in a child component
  const [rivalTeam, setRivalTeam] = useState([]);
  const [rival, setRival] = useState({}); // should probably live in a child component
  const [matchups, setMatchups] = useState({});
  const [playerActive, setPlayerActive] = useState({}); // should probably live in a child component
  const [rivalActive, setRivalActive] = useState({}); // should probably live in a child component

  const matchupPopulate = () => {
    setMatchups({
      fire: ['grass', 'bug', 'steel', 'ice'],
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
        //console.log(result);
        const { _id, username, wins, losses, draws, favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 } = result.data; //deconstruction
        setPlayer({ _id, username, wins, losses, draws, favPokemonImage, favPokemonName, favPokemonType1, favPokemonType2 }); //object shorthand
      });
  };
  // add stateSetter parameter...
  const fetchTeam = (team, stateSetter) => {
    team.forEach(pokemon => {
      axios.post('/team', {
        data: {
          pokeLookup: pokemon
        }
      })
        .then(fetchedPokemon => {
          stateSetter(prevTeam => [...prevTeam, fetchedPokemon.data]);
        })
        .catch(err => console.error('Error retrieving pokemon from server', err));
    });
  };

  const teamGen = () => {
    //console.log('Generated an additional 5 mons onto player team. Resulting Team:');
    setPlayerTeam([]);
    const generatedTeam = [
      player.favPokemonName || Math.floor(Math.random() * (151) + 1), // handle case where user without favorite pokemon navigates to battle view
      Math.floor(Math.random() * (151) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
      Math.floor(Math.random() * (152 - 1) + 1),
    ];
    //console.log(generatedTeam);
    fetchTeam(generatedTeam, setPlayerTeam);
    // fetchTeam(generatedTeam);
  };


  const rivalGen = () => {
    if (playerTeam.length) {
      setRivalTeam([]);
      //console.log('Hardcoded a team of banana dinosaurs to fight the player: ');
      const generatedRival = {};
      const rivals = {
        BananaMan: ['tropius', 'tropius', 'tropius', 'tropius', 'tropius', 'tropius'],
        AwesomeAngler: ['magikarp', 'magikarp', 'magikarp', 'magikarp', 'magikarp', 'magikarp'],
        ArwingAce: ['charizard', 'meowth', 'onix', 'beedrill', 'rhydon', 'magneton'],
        TrainerZazu: ['lickitung', 'tangela', 'mr-mime', 'farfetchd', 'psyduck', 'seel'],
        SaltySeagull: ['ponyta', 'staryu', 'vulpix', 'gengar', 'eevee', 'bulbasaur'],
        GhostHammer: ['mimikyu-disguised', 'gourgeist-average', 'palossand', 'phantump', 'litwick', 'snorlax'],
        FatTubBetty: ['mr-mime', 'probopass', 'ludicolo', 'jynx', 'shuckle', 'pelipper'],
        PalletKid: ['pikachu', 'butterfree', 'pidgeotto', 'bulbasaur', 'charmander', 'squirtle'],
      };
      generatedRival.name = Object.keys(rivals)[Math.floor(Math.random() * (7 - 0) + 0)];
      //generatedRival.team = rivals[generatedRival.name];
      fetchTeam(rivals[generatedRival.name], setRivalTeam);
      console.log(generatedRival);
      //setRival(generatedRival);
      console.log('rivalTeam: ', rivalTeam);
    } else {
      console.log('You haven\'t gotten a team for battling yet!');
    }

  };
  //setRivalActive(rivalTeam[0]);
  const changeActive = (mon) => {
    setPlayerActive(mon);
    setPlayerActive(mon);
  };

  const handleResult = (battleResult) => {
    const battleRecord = {};
    switch (battleResult) {
    case 'win':
      battleRecord.wins = player.wins + 1;
      setPlayer({ ...player, wins: player.wins + 1 });
      break;
    case 'loss':
      battleRecord.losses = player.losses + 1;
      setPlayer({ ...player, losses: player.losses + 1 });
      break;
    case 'draw':
      battleRecord.draws = player.draws + 1;
      setPlayer({ ...player, draws: player.draws + 1 });
      break;
    }
    console.log('RESULT LOGGED: ', battleResult, battleRecord);
    //axios request to server to update user record in DB
    axios.patch('api/user/updateRecords', battleRecord)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => { console.error(err); });
  };

  const matchResolution = () => {
    let playerCheck = false;
    let rivalCheck = false;
    for (let i = 0; i < 6; i++) {
      if (playerTeam[i].canBattle) {
        playerCheck = true;
      }
      if (rivalTeam[i].canBattle) {
        rivalCheck = true;
      }
    }
    if (!playerCheck) {
      handleResult('loss');
    } else if (!rivalCheck) {
      handleResult('win');
    }
  };

  const battleResolution = (playerActive, rivalActive) => {
    console.log('playerActive: ', playerActive);
    console.log('rivalActive: ', rivalActive);
    let playerMulti = 1;
    let rivalMulti = 1;

    // MULTIPLIER START    
    if (matchups[playerActive.types[0]].includes(rivalActive.types[0])) { playerMulti += 0.25; }
    if (matchups[rivalActive.types[0]].includes(playerActive.types[0])) { rivalMulti += 0.25; }

    if (rivalActive.types[1]) {
      if (matchups[playerActive.types[0]].includes(rivalActive.types[1])) { playerMulti += 0.25; }
      if (matchups[rivalActive.types[1]].includes(playerActive.types[0])) { rivalMulti += 0.25; } 
    }
    if (playerActive.types[1]) {
      if (matchups[playerActive.types[1]].includes(rivalActive.types[0])) { playerMulti += 0.25; }
      if (matchups[rivalActive.types[0]].includes(playerActive.types[1])) { rivalMulti += 0.25; }
    }
    if (rivalActive.types[1] && playerActive.types[1]) {
      if (matchups[playerActive.types[1]].includes(rivalActive.types[1])) { playerMulti += 0.25; }
      if (matchups[rivalActive.types[1]].includes(playerActive.types[1])) { rivalMulti += 0.25; }
    } // MULTIPLIER END
    
    if (playerActive.statTotal * playerMulti < rivalActive.statTotal * rivalMulti) {
      playerActive.canBattle = false;
      console.log('rival wins the round');
    } else {
      rivalActive.canBattle = false;
      console.log('player wins the round');
    }
    // call a function that checks state and moves to declare a winner
    // set both active pokemon to null
    //setRivalActive({});
    //setPlayerActive({});
    // set rival pokemon to next in array with canBattle: true
    let foundNext = false;
    let index = 0;
    while (!foundNext && index < 6) {
      if (rivalTeam[index].canBattle) {
        foundNext = true;
        setRivalActive(rivalTeam[index]);
        setRivalActive(rivalTeam[index]);
      }
      index++;
    }
    matchResolution();
  };

  const printStates = ()=> {
    console.log('playerteam: ', playerTeam, 'PlayerActive: ', playerActive, 'rivalteam: ', rivalTeam, 'rivalactive:', rivalActive);
  };

  useEffect(() => {
    getFavorite();
    matchupPopulate();
  }, [playerTeam, rivalTeam, playerActive, rivalActive]);

  return (
    <>
      <BattleContainerContainer>
        <BattleHeadContainer>
          <BattleTextDiv style={{marginTop: '1rem'}}>Welcome to the Battle Arena, {player.username || 'Player'}</BattleTextDiv>
          <BattleTextDiv>Generate a team below. The team will always include your favorite Pokemon</BattleTextDiv>
          <BattleTextDiv>Once you have a team, you can take them into battle against powerful opponents!</BattleTextDiv>
          <BattleTextDiv>Your favorite pokemon: {player.favPokemonName}</BattleTextDiv>
          <BattleImage src={player.favPokemonImage} />
          <BattleTextDiv>Type: </BattleTextDiv>
          <BattleTextDiv>{player.favPokemonType1}{player.favPokemonType2 ? `/${player.favPokemonType2}` : ''} </BattleTextDiv>

          <p></p>
        </BattleHeadContainer>
        <BattleHeadContainer>
          <BattleButton onClick={teamGen}> Generate a team</BattleButton>
          {/* <div> Your Team: INSERT GRAPHIC HERE</div> */}
          <div id='player-team'>
            {
              playerTeam.length ? <span>{playerTeam.map((mon, i) => {
                return <img style={{cursor: 'pointer'}} onClick={(e)=> changeActive(playerTeam[i])} src={`${mon.sprite}`} />;
              })}</span> : <div></div>
            }
          </div>
          <BattleTextDiv>There are rivals waiting to fight! Get an opponent below.</BattleTextDiv>
          <BattleButton onClick={rivalGen}> Fight a rival!</BattleButton>
          <div id='rival-team'>
            {
              rivalTeam.length ? <span>{rivalTeam.map((mon, i) => {
                return <img src={`${mon.sprite}`} />;
              })}</span> : <div></div>
            }
          </div>
          {/* <BattleButton onClick={() => { handleResult('win'); }}> Log a win</BattleButton> */}
          <BattleButton onClick={() => {
            printStates();
            console.log('first player member: ', playerTeam[0]);
            console.log('first rival member: ', rivalTeam[0]);
            setPlayerActive(playerTeam[0]);
            setRivalActive(rivalTeam[0]);
            setPlayerActive(playerTeam[0]);
            setRivalActive(rivalTeam[0]);
            printStates();
          }}>FIGHT!</BattleButton>
        </BattleHeadContainer>
      </BattleContainerContainer>
      <BattleField>
        <BattleFieldDiv>
          {
            Object.entries(playerActive).length ? <BattleFieldDiv>
              <BattleFieldText>Change your active Pokemon by clicking on one of your team member above.</BattleFieldText>
              <BattleFieldText>Your active Pokemon: {playerActive.name}</BattleFieldText>
              <BattleFieldSprites src={playerActive.sprite} />
              {/* <BattleFieldText>{playerActive.types[0]}{playerActive.types[1] ? `/${playerActive.types[1]}` : ''}</BattleFieldText> */}
            </BattleFieldDiv> : <BattleFieldDiv />
          }
        </BattleFieldDiv>
        <BattleFieldDiv>
          {
            Object.entries(rivalActive).length ? <BattleFieldDiv>
              <BattleFieldText>Rival's active Pokemon: {rivalActive.name}</BattleFieldText>
              <BattleFieldSprites src={rivalActive.sprite} />
              {/* <BattleFieldText>{rivalActive.types[0]}{rivalActive.types[1] ? `/${rivalActive.types[1]}` : ''}</BattleFieldText> */}
            </BattleFieldDiv> : <BattleFieldDiv />
          }
        </BattleFieldDiv>
        <BattleButton onClick={()=>{ battleResolution(playerActive, rivalActive); }}>Resolve this battle</BattleButton>
      </BattleField>
    </>
  );
};

export default BattleView;
