import React from 'react';
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { ProductType } from '../../App';

type LeftBarProps = {
  selectByCategory: (category: ProductType['category']) => void;
};

const LeftBar: React.FC<LeftBarProps> = ({ selectByCategory }) => {
  return (
    <div>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightgray' }}
        component='nav'
        subheader={<ListSubheader component='div'>Categories</ListSubheader>}
      >
        {['All products', "Men's clothing", "Women's clothing", 'Jewelery', 'Electronics'].map(category => (
          <ListItemButton>
            <ListItemText primary={category} onClick={() => selectByCategory(category)}/>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default LeftBar;
