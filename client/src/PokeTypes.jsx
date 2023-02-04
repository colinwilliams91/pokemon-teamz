import React, { useState, useEffect } from 'react';
import { TypeImg, TypeGrid, OuterTypeContainer, PokeTypesBody, TextTypeH1, FlexDiv } from './components/Styled.jsx';
import axios from 'axios';
const PokeTypes = () => {

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

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

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>

      <PokeTypesBody>
        <OuterTypeContainer>
          {types.map((type, i) => (
            <TypeImg key={i} src={type.imageUrl} onClick={() => handleTypeClick(type)} />
          ))}
        </OuterTypeContainer>
        <TypeGrid>
          <div>
            <TextTypeH1>STRONG VS.</TextTypeH1>
            {selectedType && (
              <OuterTypeContainer>
                {types
                  .filter((t) => selectedType.strongVs.includes(t.name))
                  .map((t, index) => (
                    <TypeImg key={index} src={t.imageUrl} />
                  ))}
              </OuterTypeContainer>
            )}
          </div>
          <div>
            <TextTypeH1>WEAK VS.</TextTypeH1>
            {selectedType && (
              <OuterTypeContainer>
                {types
                  .filter((t) => selectedType.vulnerableTo.includes(t.name))
                  .map((t, index) => (
                    <TypeImg key={index} src={t.imageUrl} />
                  ))}
              </OuterTypeContainer>
            )}
          </div>
        </TypeGrid>
      </PokeTypesBody>
    </>
  );
};



export default PokeTypes;