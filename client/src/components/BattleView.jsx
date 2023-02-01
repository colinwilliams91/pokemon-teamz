import React from 'react';
import axios from 'axios';

const BattleView = () => {

  const teamGen = () => {
    console.log('Generate a 5 \'Mon team and added the favorite pokemon to it.');
    axios.get('api/user/current')
      .then((result) => {
        console.log(result);
      });
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

  return (
    <>
      <div> Battle Screen </div>
      <div> Get a team that includes your favorite Pokemon!</div>
      <div>Your favorite pokemon: {testTeam[0]}</div>
      <button onClick={teamGen}> Generate Team</button>
      <container> Your Team</container>
    </>
  );
};

export default BattleView;
