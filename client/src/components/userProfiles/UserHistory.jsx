import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserHistBox, UserHistBox1, UserHistBox2, ColorBar, Text, Text2, Text3 } from '../Styled.jsx';

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
      <UserHistBox>
        
        <UserHistBox1>
          <ColorBar>
            <Text>Wins</Text>
          </ColorBar>
          <Text2>{userWins}</Text2>
        </UserHistBox1>
        <UserHistBox1>
          <ColorBar>
            <Text>Losses</Text>
          </ColorBar>
          <Text2>{userLosses}</Text2>
        </UserHistBox1>

        <UserHistBox2>
          <ColorBar>
            <Text>Draws</Text>
          </ColorBar>
          <Text3>{userDraws}</Text3>
        </UserHistBox2>

      </UserHistBox>
    </>
  );
};

export default UserHistory;