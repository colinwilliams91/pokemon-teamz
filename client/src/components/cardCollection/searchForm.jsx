import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconButton, TextField, SearchIcon } from '../../mui/index.jsx';


const SearchForm = ({ setCards }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = async e => {
    e.preventDefault();

    setCards([]);

    try {
      const { data } = await axios.get('/api/deck', { params: { q: searchTerm } });
      setCards(data);
      setSearchTerm('');
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get('/api/deck/firstFiftyCards');
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getInitialCards();
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <TextField
          style={{marginLeft: '1.5rem', marginBottom: '1rem'}}
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' variant='contained'>
          <SearchIcon style={{ fill: 'blue' }} />
        </IconButton>
      </div>
    </form>
  );
};

export default SearchForm;
