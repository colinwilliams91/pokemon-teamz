import React, { useState } from 'react';
import { TypeDiv, TextTypeDiv, OuterTypeContainer, PokeTypesBody } from './components/Styled.jsx';
const PokeTypes = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <PokeTypesBody>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Normal</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ff0000, #f97800, #ffff00)' }} />
          <TextTypeDiv>Fire</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #7de7ff, #0096f4, #0051ff)' }} />
          <TextTypeDiv>Water</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #43ff43,  #00c817, #006d14 )' }} />
          <TextTypeDiv>Grass</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #fff6ba,  #fffc9d, #fff01c )' }} />
          <TextTypeDiv>Electric</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #aaefff, #00e1ff )' }} />
          <TextTypeDiv>Ice</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ff785d, #de0f00, #9a0000 )' }} />
          <TextTypeDiv>Fighting</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #cc35ff,  #b700f4, #6c0090 )' }} />
          <TextTypeDiv>Poison</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right,#f1bc60,  #ffa202, #b17000 )' }} />
          <TextTypeDiv>Ground</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Flying</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Psychic</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Bug</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Rock</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Ghost</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Dark</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Dragon</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Steel</TextTypeDiv>
        </OuterTypeContainer>
        <OuterTypeContainer>
          <TypeDiv style={{ background: 'linear-gradient(to bottom right, #ffffff,  #9e9e9e, #646464 )' }} />
          <TextTypeDiv>Fairy</TextTypeDiv>
        </OuterTypeContainer>
      </PokeTypesBody>
    </>
  );
};



export default PokeTypes;