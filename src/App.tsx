import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/products/ProductList';
import { Grid, Drawer } from '@mui/material';
import LeftBar from './components/LeftBar/LeftBar';
import SearchBar from './components/SearchBar/SearchBar';
import Cart from './components/Cart/Cart';

export type ProductType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  const [data, setData] = useState([] as ProductType[]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductType[]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.error(err));
  };

  const handleAddToCart = (selectedProduct: ProductType) => {
    setCartItems(prev => {
      const isProductAddedToCart = prev.find(product => product.id === selectedProduct.id);
      if (isProductAddedToCart) {
        return prev.map(product => product.id === selectedProduct.id ? {...product, amount: product.amount + 1} : product);
      } else {
        return [...prev, {...selectedProduct, amount: 1}];
      }
    })
  };

  const handleRemoveFromCart = (selectedProduct: ProductType) => {
    setCartItems(prev => {
      const isProductAmountLargerThanOne = prev.find(product => product.id === selectedProduct.id && product.amount > 1);
      if (isProductAmountLargerThanOne) {
        return prev.map(product => product.id === selectedProduct.id ? {...product, amount: product.amount - 1} : product);
      } else {
        return prev.filter(product => product.id !== selectedProduct.id);
      }
    })
  };

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className='App'>
      <SearchBar
        cartItems={cartItems}
        openCart={openCart}
      />
      <Drawer
        anchor='right'
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <Grid item xs={8}>
          <ProductList
            data={data}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
