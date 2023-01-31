import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Avatar, Button} from '@mui/material';
import { Send } from '@mui/icons-material';
import {UserMsg, UserInfo, Message} from '../Styled.jsx';


const MessageEntry = ({ msg }) => {

  const [sender, setUser] = useState([]);
  const [loggedInUser, setLogged] = useState();

  useEffect(() => {
    axios.get('/api/user/findUserId' + msg.sender)
      .then((data)=> {
        const resArr = data.data.data;
        setUser(resArr[0]);
        return resArr[1];
      })
      .then(data => setLogged(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <UserMsg>
      <UserInfo>
        <Link to={`/userProfile:${msg.sender}`}>
          <Avatar
            src={sender.avatar}
            alt={sender.name}
            referrerpolicy="no-referrer"
          />
        </Link>
        <p>{sender.username}</p>
      </UserInfo>
      <Message>
        {msg.message}
      </Message>
      {loggedInUser !== Number(msg.sender) ?
        <Link to={'/compose:' + msg.sender} >
          <Button variant='contained' endIcon={<Send/>}>Reply</Button>
        </Link> :
        <></>}

    </UserMsg>
  );
};
export default MessageEntry;
