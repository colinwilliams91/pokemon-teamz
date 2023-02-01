import React, { useState } from 'react';
import { TypeDiv, InboxBody } from './components/Styled.jsx';
const PokeTypes = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <InboxBody>
        <TypeDiv>
          <h1>Normal</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Fire</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Water</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Grass</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Electric</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Ice</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Fighting</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Poison</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Ground</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Flying</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Psychic</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Bug</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Rock</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Ghost</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Dark</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Dragon</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Steel</h1>
        </TypeDiv>
        <TypeDiv>
          <h1>Fairy</h1>
        </TypeDiv>
      </InboxBody>
    </>
  );
};



export default PokeTypes;