import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Leader from './Leader.jsx';







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
  //console.log('leaders:', leaders);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {leaders.map((leader, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{leader.firstName}</td>
            <td>{leader.wins}</td>
          </tr>
        ))}
      </tbody>
    </Table >
  );


};





export default LeaderBoard;

