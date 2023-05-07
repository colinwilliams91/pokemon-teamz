import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledTableRow, StyledTableCell } from './components/Styled.jsx';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from './mui/index.jsx';


//This function is for table mui to format rows for table
const createData = (rank, trainer, name, captain, winPercentage, wins, losses) => {
  return { rank, trainer, name, captain, winPercentage, wins, losses };
};

//Trainers and Pokes are here to add images to users seeded into database so that we have enough users
//on leader-board to present the project.
const trainers = ['https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/4_tmgl9y.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/2_wn0jws.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/3_g5v7we.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675307950/Trainers/1_ezqvts.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544964/Trainers/6_ipxcim.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544968/Trainers/5_w2rcno.png',
  'https://res.cloudinary.com/de0mhjdfg/image/upload/v1675544973/Trainers/7_sy9lok.png'
];

const pokes = ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
];




const LeaderBoard = () => {

  const [leaders, setLeaders] = useState([]);

  const getAllLeaders = () => {
    axios.get('/api/user/db/users')
      .then((users) => {
        users.data.forEach((user) => {
          console.log('user', user);
          user.winPercentage = Math.floor((user.wins / (user.wins + user.losses) * 100));
          if (!user.trainer) {
            user.trainer = trainers[Math.floor(Math.random() * trainers.length)];
          }
          if (user.favPokemonImage) {
            user.captain = user.favPokemonImage;
          } else {
            user.captain = pokes[Math.floor(Math.random() * pokes.length)];
          }
        });
        users = users.data.sort((a, b) => b.winPercentage - a.winPercentage);
        setLeaders(users);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    getAllLeaders();
  }, []);


  const rows = leaders.map((leader, i) => {
    return createData(i, leader.trainer, leader.firstName, leader.captain, leader.winPercentage, leader.wins, leader.losses);
  });

  return (
    //Some css attributes are currently in JSX, but could be added to Styled Components in Styled.jsx
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} >
        <TableHead style={{backgroundColor: 'grey'}}>
          <TableRow>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center" ><b>Rank</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>Trainer</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>Player</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>Captain</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>WinPercentage</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>Wins</b></TableCell>
            <TableCell style={{ fontFamily: 'Pokemon Solid, sans-serif', color: 'black' }}
              align="center"><b>Losses</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow
              key={i}
              row={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell>{i + 1}</StyledTableCell>
              <TableCell align="center"><img src={row.trainer} style={{
                width: '60px',
                height: '60px'
              }} /></TableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <TableCell align="center"><img src={row.captain} style={{
                width: '60px',
                height: '60px'
              }} /></TableCell>
              <StyledTableCell>{row.winPercentage + '%'}</StyledTableCell>
              <StyledTableCell>{row.wins}</StyledTableCell>
              <StyledTableCell>{row.losses}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );

};



export default LeaderBoard;

