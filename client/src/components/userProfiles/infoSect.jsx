import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import { Avatar, Button, TextField } from '../../mui/index.jsx';
import { CreateCharContainer, FavoritePokemon, TrainerCreatorContainer, InfoFavoriteContainer } from '../Styled.jsx';
import TrainerCreator from './TrainerCreator.jsx';
import UserHistory from './UserHistory.jsx';
import UserInfo from './UserInfo.jsx';

/** CURRENT ISSUE
 * Profile data only rendering after making an edit
 * text inputted into edit dosent get sent to the function to edit it in the db
 */
export const TrainerContext = React.createContext();

const InfoSect = () => {
  const [profile, setProfile] = useState({});
  const [inputVals, setInputVals] = useState({});
  const [character, setCharacter] = useState({});
  console.log('CHARACTER', character);

  const retriveIdData = () => { // get the profile object data from db
    axios.get('/api/user/current') // then just return YOU the current user data
      .then(data => {
        console.log('DATA?', data);
        setProfile(data.data); // give the profile state the profile object from google auth
        setInputVals({ // set the text on the page to the profile objects username and desc values
          description: profile.description,
          username: profile.username,
          clicked: false,
          create: false
        });
        setCharacter(data.data.trainer || data.data.avatar);
      })
      .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
  };

  const changeUsername = (newName) => { // the inputted name will be sent to the database to be edited
    axios.patch('/api/user/name', { name: newName })
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'name error'));
  };

  const changeDescription = (newDescription) => { // the inputted descrpition will be sent to the database to be edited
    axios.patch('api/user/description', { data: newDescription })
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'description err'));
  };

  const handleClick = () => { // update the username and description witht he incomming user input
    if (userRef.current.value.length !== 0) { // if the text field is not empty change the username
      changeUsername(userRef.current.value);
    }

    if (descRef.current.value.length !== 0) {
      changeDescription(descRef.current.value); // if the description field is not empty change the description
    }
  };


  useEffect(retriveIdData, []);


  const userRef = createRef(); // the refrence for the username edit text
  const descRef = createRef(); // the refrence for the description edit text

  return (
    <>
      <TrainerContext.Provider value={{ character, setCharacter, inputVals, setInputVals, profile, setProfile, userRef, descRef }}>
        <div className='info'>
          {/* <img alt={profile.firstName} width='100px' src={profile.avatar} referrerpolicy="no-referrer" /> <br /> */}
          <UserInfo />

          {inputVals.clicked ?
            <div><Button
              style={{ right: '16rem', top: '1rem' }}
              variant='contained'
              onClick={() => {
                handleClick();
                setInputVals(() => ({ clicked: false }));
                retriveIdData();
              }}>Save</Button></div> : <div></div>}

          <InfoFavoriteContainer>
            <span style={{ position: 'relative', top: '2rem' }}><b>Your Favorite Pokemon:</b></span>
            <img src={profile.favPokemonImage} alt={profile.favPokemonName} width='90px' referrerPolicy='no-referrer' /> <br />
            <span style={{ position: 'relative', top: '2rem' }}><b>{profile.favPokemonName}</b></span>  <br />
            <ul>
              <li style={{ position: 'relative', top: '2rem' }}>{profile.favPokemonType1}</li>
              {profile.favPokemonType2 ? <li style={{ position: 'relative', top: '2rem' }}>{profile.favPokemonType2}</li> : <></>}
            </ul>
          </InfoFavoriteContainer>

          <TrainerCreatorContainer>
            {inputVals.create ? <TrainerCreator /> : <></>}
          </TrainerCreatorContainer>

          <UserHistory />

        </div>
      </TrainerContext.Provider>
    </>
  );
};

export default InfoSect;



// <-- moved into UserInfo.jsx -->
{ /* <h2>You!</h2>
<Avatar
  alt={profile.firstName}
  src={profile.avatar}
  sx={{ width: 100, height: 100 }}
  referrerPolicy="no-referrer"
  style={{margin: '1rem'}}
/>

<Button
  onClick={() => setInputVals(() => ({ clicked: true }))}
>Edit Profile
</Button> <br /> */ }

