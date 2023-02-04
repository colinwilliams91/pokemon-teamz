import React, { useState, useEffect, useContext } from 'react';
import { Avatar, Button, TextField } from '../../mui/index.jsx';
import { UserInfoBox, CreateCharContainer } from '../Styled.jsx';
import { TrainerContext } from './infoSect.jsx';
const UserInfo = () => {

  const { profile, setInputVals, inputVals, userRef, descRef, character } = useContext(TrainerContext);


  return (

    <>
      <UserInfoBox>

        <CreateCharContainer>
          {inputVals.clicked ?
            <div><TextField id='outlined-uncontrolled' label='Username' defaultValue={profile.username} inputRef={userRef} /> </div> :
            <h1>{profile.username}: </h1>} <br />

          {inputVals.clicked ?
            <div><TextField id='outlined-uncontrolled' label='Description' defaultValue={profile.description} inputRef={descRef} /></div> :
            <h3 style={{ position: 'relative', top: '.7rem', left: '.7rem' }}> {profile.description}</h3>} <br />
        </CreateCharContainer>

        <CreateCharContainer>
          <h2>Your Profile!</h2>
          <Avatar
            alt={profile.firstName}
            src={profile.avatar}
            sx={{ width: 100, height: 100 }}
            referrerPolicy="no-referrer"
            style={{ margin: '1rem' }}
          />
          <Button onClick={() => setInputVals(() => ({ clicked: !inputVals.clicked }))}>Edit Profile</Button> <br />
        </CreateCharContainer>

        <CreateCharContainer>
          <h2>Your Trainer!</h2>
          <Avatar
            alt={profile.firstName}
            src={character}
            sx={{ width: 100, height: 100 }}
            referrerPolicy="no-referrer"
            style={{ margin: '1rem' }}
          />
          <Button onClick={() => setInputVals(() => ({ create: !inputVals.create }))}>Edit Trainer</Button> <br />
        </CreateCharContainer>


      </UserInfoBox>
    </>
  );
};

export default UserInfo;


// <-- put in TextField -->
// onKeyDown={(e) => {
//   console.log('KEY HIT', e.key);
//   if (e.key === 'Enter') {
//     handleClick();
//     setInputVals(() => ({ clicked: false }));
//     retriveIdData();
//   }
// }}