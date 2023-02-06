import React, { useContext } from 'react';
import { Avatar, Button } from '../../mui/index.jsx';
import { UserInfoBox, CreateCharContainer } from '../Styled.jsx';
import { TrainerContext } from './infoSect.jsx';

const UserInfo = () => {

  const { profile, setInputVals, inputVals, userRef, descRef, character } = useContext(TrainerContext);

  return (

    <>
      <UserInfoBox>
        <CreateCharContainer>
          {inputVals.clicked ?
            <div><input
              type='text'
              style={{
                backgroundColor: '#797979',
                width: '100%',
                paddingLeft: '.4rem',
                paddingBottom: '.2rem',
                height: '2rem'}}
              defaultValue={profile.username}
              ref={userRef}/></div> :
            <h1>{profile.username}: </h1>} <br />

          {inputVals.clicked ?
            <div><input
              type='text'
              style={{
                backgroundColor: '#797979',
                width: '100%',
                paddingLeft: '.5rem',
                paddingBottom: '.2rem',
                height: '2rem'}}
              defaultValue={profile.description}
              ref={descRef}/></div> :
            <h3 style={{
              position: 'relative',
              top: '.7rem',
              left: '.7rem' }}>
              {profile.description}</h3>} <br />
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
          <Button
            style={{
              fontFamily: 'Pokemon Solid',
              letterSpacing: '.2rem',
              textDecoration: 'underline' }}
            onClick={() => setInputVals(() => ({ clicked: !inputVals.clicked }))}
          >Edit Profile</Button> <br />
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
          <Button
            style={{
              fontFamily: 'Pokemon Solid',
              letterSpacing: '.2rem',
              textDecoration: 'underline' }}
            onClick={() => setInputVals(() => ({ create: !inputVals.create }))}
          >Edit Trainer</Button> <br />
        </CreateCharContainer>
      </UserInfoBox>
    </>
  );
};

export default UserInfo;

