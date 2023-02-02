import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';


import axios from 'axios';
import Leader from './Leader.jsx';





//const { obtainAllUsers } = require ('../../server/db/dbHelperFuncs.js');

const data = [{ firstName: 'steve', wins: 10 }, { firstName: 'steve', wins: 20 }];

const LeaderBoard = () => {
  const [leaders, setLeaders] = useState([]);


  const getAllLeaders = () => {
    axios.get('/api/user/db/users')
      .then((users) => {
        console.log(users);
        setLeaders(users);
      })
      .catch((err) => {
        console.log(err);
      });

  };



  useEffect(() => {
    getAllLeaders();

  }, []);




  return (

    <div>
      <h2>LeaderBoard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((leader, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{leader.firstName}</td>
                  <td>{leader.wins}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>



  );

};


export default LeaderBoard;

