import React from 'react';
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';

const LeftBar = () => {
  return (
    <div>
      <List
        sx={{width: '100%', maxWidth: 360, bgcolor: 'lightgray' }}
        component='nav'
        subheader={
          <ListSubheader component='div'>
            Categories
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText primary="Men's clothing"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Women's clothing"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Jewelery"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Electronics"/>
        </ListItemButton>
      </List>
    </div>
  )
};

export default LeftBar;
