import React, { useState, useEffect } from 'react';
//import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Leader from './Leader.jsx';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from './mui/index.jsx';
import { LeaderBoardContainer } from '../src/components/Styled.jsx';


const createData = (rank, name, winPercentage, wins, losses) => {
  return { rank, name, winPercentage, wins, losses };
};

const LeaderBoard = () => {

  const [leaders, setLeaders] = useState([]);

  const getAllLeaders = () => {
    axios.get('/api/user/db/users')
      .then((users) => {
        users.data.forEach((user) => {
          user.winPercentage = Math.floor((user.wins / (user.wins + user.losses) * 100));
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
  console.log(leaders);


  const rows = leaders.map((leader, i) => {
    console.log(i, leader.firstName, leader.winPercentage, leader.wins, leader.losses);
    return createData(i, leader.firstName, leader.winPercentage, leader.wins, leader.losses);
  });

  return (

    <TableContainer component={Paper}>
      <Table className="leader-table" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Rank</b></TableCell>
            <TableCell align="center"><b>Trainer</b></TableCell>
            <TableCell align="center"><b>WinPercentage</b></TableCell>
            <TableCell align="center"><b>Wins</b></TableCell>
            <TableCell align="center"><b>Losses</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              row={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.winPercentage + '%'}</TableCell>
              <TableCell align="center">{row.wins}</TableCell>
              <TableCell align="center">{row.losses}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

};





export default LeaderBoard;

