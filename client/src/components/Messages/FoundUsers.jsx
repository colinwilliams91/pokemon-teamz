import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import { Send } from '@mui/icons-material';
import { FoundUser } from '../Styled.jsx';


const FoundUsers = props => (
  <FoundUser>
    <Avatar
      src={props.user.avatar}
      alt={props.user.name}
      width='50'
    />
    <p>{props.user.username}</p>
    <Link to={'/compose:' + props.user._id} >
      <Button variant='contained' endIcon={<Send />}>Message</Button>
    </Link>
  </FoundUser>
);

export default FoundUsers;
