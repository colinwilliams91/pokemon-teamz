import React, { useState, useEffect } from 'react';
import { TypeImg, TextTypeDiv, OuterTypeContainer, PokeTypesBody } from './components/Styled.jsx';
import axios from 'axios';
const PokeTypes = () => {

  const [types, setTypes] = useState([]);

  useEffect(() => {

    const getAllTypes = async () => {
      try {
        const res = await axios.get('/api/types');
        setTypes(res.data);
      } catch (error) {
        console.error('Error in getAllTypes : ', error);
      }
    };

    getAllTypes();
  }, []);

  return (
    <>

      <PokeTypesBody>
        <OuterTypeContainer>
          {types.map((type, i) => (
            <TypeImg key={i} src ={type.imageUrl} />
          ))}
          <TextTypeDiv>Normal</TextTypeDiv>
        </OuterTypeContainer>
      </PokeTypesBody>
    </>
  );
};



export default PokeTypes;