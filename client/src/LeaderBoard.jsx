import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';



const LeaderBoard = () => {
  //axios request to server/database to get Name and Score
  const getLeaders = () => {
    axios.get('db/users')
      .then((data) => {
        console.log(data);
      }).err((err) => {
        console.log(err);
      });
  };
  //getLeaders();

  return (

    <Table striped bordered hover>
      <h2>LeaderBoard</h2>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>I.Tusk</td>
          <td>10000000000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>B.McHammer</td>
          <td>1888888</td>
        </tr>
        <tr>
          <td>3</td>
          <td>S.P.Beets</td>
          <td>190999</td>
        </tr>
        <tr>
          <td>4</td>
          <td>J.Valjean</td>
          <td>193</td>
        </tr>
      </tbody>
    </Table>




  );


};

export default LeaderBoard;

