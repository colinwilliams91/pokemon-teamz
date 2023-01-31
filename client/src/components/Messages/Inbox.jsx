import React, { useEffect, useState } from 'react';
import MessageList from './MessageList.jsx';
import axios from 'axios';
import Search from './Search.jsx';
import {Header, InboxBody} from '../Styled.jsx';




const Inbox = () => {

  const [msg, setMsg] = useState([]);

  const getInbox = () =>{
    axios.get('/api/chat')
      .then(data => setMsg(data.data))
      .catch(err => console.log(err));
  };

  useEffect(getInbox, []);

  return (
    <div>
      <Header>Inbox</Header>
      <InboxBody>
        <MessageList msg={msg}/>
        <Search/>
      </InboxBody>
    </div>
  );
};

export default Inbox;
