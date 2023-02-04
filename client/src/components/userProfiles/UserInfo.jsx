import React, { useState, useEffect } from 'react';
import { Avatar, Button, TextField } from '../../mui/index.jsx';
import { UserHistBox, UserHistBox1, UserHistBox2, ColorBar, Text, Text2, Text3, UserInfoBox } from '../Styled.jsx';

const UserInfo = () => {

 

  return (

    <>
      <UserInfoBox>
        <h2>You!</h2>
        <Avatar
          alt={profile.firstName}
          src={profile.avatar}
          sx={{ width: 100, height: 100 }}
          referrerPolicy="no-referrer"
          style={{ margin: '1rem' }}
        />
        <Button onClick={() => setInputVals(() => ({ clicked: true }))}>Edit Profile</Button> <br />
      </UserInfoBox>
    </>
  );
};

export default UserInfo;