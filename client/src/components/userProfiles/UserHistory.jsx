import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserHistory = () => {
  const [userWins, setUserWins] = useState();
  const [userLosses, setUserLosses] = useState();
  const [userDraws, setUserDraws] = useState();

  useEffect(() => {
    axios.get('api/user/current')
      .then((userObj) => {
        setUserWins(userObj.data.wins);
        setUserLosses(userObj.data.losses);
        setUserDraws(userObj.data.draws);
      })
      .catch((err) => {
        console.log(err, 'Axios get user history');
      });
  }, []);

  
  return (

    <>
      <div> User History </div>
      <div>
        <ul>
          <li>wins: {userWins}</li>
          <li>losses: {userLosses}</li>
          <li>draws: {userDraws}</li>
        </ul>
      </div>
    </>
  );
};

export default UserHistory;