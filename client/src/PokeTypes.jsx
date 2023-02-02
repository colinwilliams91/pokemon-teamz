import React, { useState } from 'react';
import { TypeDiv, TextTypeDiv, OuterTypeContainer, PokeTypesBody } from './components/Styled.jsx';
const PokeTypes = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <PokeTypesBody>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Normal</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom, #ff0000, #ffff00)' }} />
          <TextTypeDiv>Fire</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Water</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Grass</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Electric</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Ice</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Fighting</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Poison</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Ground</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Flying</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Psychic</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Bug</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Rock</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Ghost</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Dark</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Dragon</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Steel</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv />
          <TextTypeDiv>Fairy</TextTypeDiv>
        </OuterTypeContainer>
      </PokeTypesBody>
    </>
  );
};



export default PokeTypes;