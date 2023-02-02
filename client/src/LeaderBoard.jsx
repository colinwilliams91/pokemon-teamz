//import React, { useState, useEffect } from 'react';
import * as React from 'react';

//import Table from 'react-bootstrap/Table';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const createData = (rank, name, points) => {
  return { rank, name, points };
};















import axios from 'axios';
import Leader from './Leader.jsx';





//const { obtainAllUsers } = require ('../../server/db/dbHelperFuncs.js');

const data = [{ firstName: 'steve', wins: 10 }, { firstName: 'steve', wins: 20 }];

const LeaderBoard = () => {



  // const [leaders, setLeaders] = useState([]);


  // const getAllLeaders = () => {
  //   axios.get('/api/user/db/users')
  //     .then((users) => {
  //       console.log(users);
  //       setLeaders(users);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // };



  // useEffect(() => {
  //   getAllLeaders();

  // }, []);


  return (
    <div>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell> Name </TableCell>
            <TableCell> Points </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{i}</TableCell>
              <TableCell align="right">{data.firstName}</TableCell>
              <TableCell align="right">{data.wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  // return (

  //   <div>
  //     <h2>LeaderBoard</h2>
  //     <Table striped bordered hover>
  //       <thead>
  //         <tr>
  //           <th>Rank</th>
  //           <th>User</th>
  //           <th>Points</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           data.map((leader, i) => {
  //             return (
  //               <tr key={i}>
  //                 <td>{i}</td>
  //                 <td>{leader.firstName}</td>
  //                 <td>{leader.wins}</td>
  //               </tr>
  //             );
  //           })
  //         }
  //       </tbody>
  //     </Table>
  //   </div>



  // );
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};



export default LeaderBoard;

