import React, { useState } from 'react';
import { TypeDiv } from './components/Styled.jsx';
const PokeTypes = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <TypeDiv>
      <h1>Fire</h1>
    </TypeDiv>
  );
};



export default PokeTypes;