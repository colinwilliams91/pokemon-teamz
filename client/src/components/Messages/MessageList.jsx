import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MessageEntry from './MessageEntry.jsx';
import { Grid2 } from '../../mui/index.jsx';
import { ListBody } from '../Styled.jsx';



const MessageList = () => {

  const [msg, setMsg] = useState([]);

  const getInbox = () => {
    axios.get('/api/chat')
      .then(data => setMsg(data.data))
      .catch(err => console.log(err));
  };

  useEffect(() => { getInbox(); }, []);

  return (
    <Grid2 container spacing={2} direction="column">
      <ListBody>
        {msg.map(msg => (
          <MessageEntry
            msg={msg}
            key={msg._id}
          />
        ))}
      </ListBody>
    </Grid2>

  );
};
export default MessageList;
