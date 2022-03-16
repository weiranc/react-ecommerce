import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
import { ProductType } from '../../App';

type SearchBarProps = {
  cartItems: ProductType[];
  openCart: () => void;
  setSearch: (arg0: string) => void;
};

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const countTotalItems = (items: ProductType[]) => {
  return items.reduce(
    (accumulate: number, items) => accumulate + items.amount,
    0
  );
};

const SearchBar: React.FC<SearchBarProps> = ({
  cartItems,
  openCart,
  setSearch,
}) => {
  return (
    <div className='search_bar'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Box display='flex' flexGrow={1}>
              <Typography variant='h6' noWrap component='div'>
                TwitchE <ShopIcon fontSize="large" color="primary"/>
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Search>
            </Box>
            <button className='cart_button' onClick={() => openCart()}>
              <Badge badgeContent={countTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon />
              </Badge>
            </button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default SearchBar;
