import React, { useState, useEffect } from 'react';
//import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Leader from './Leader.jsx';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from './mui/index.jsx';


const createData = (rank, name, wins) => {
  return { rank, name, wins };
};






const LeaderBoard = () => {



  const [leaders, setLeaders] = useState([]);


  const getAllLeaders = () => {
    axios.get('/api/user/db/users')
      .then((users) => {
        setLeaders(users.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };



  useEffect(() => {
    getAllLeaders();

  }, []);
  console.log('leaders:', leaders);

  const rows = leaders.map((leader, i) => {
    console.log(i, leader.firstName);
    return createData(i, leader.firstName, leader.wins);
  });
  console.log('rows', rows);

  // return (
  //   <Table>
  //     <thead>
  //       <tr>
  //         <th>Rank</th>
  //         <th>Name</th>
  //         <th>Points</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {leaders.map((leader, i) => (
  //         <tr key={i}>
  //           <td>{i}</td>
  //           <td>{leader.firstName}</td>
  //           <td>{leader.wins}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table >
  // );

  return (
    <TableContainer component={Paper}>
      <Table className="leader-table" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Rank</b></TableCell>
            <TableCell align="right"><b>Player</b></TableCell>
            <TableCell align="right"><b>Wins</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              row={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{i + 1}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

};





export default LeaderBoard;

