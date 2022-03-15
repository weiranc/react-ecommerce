import React, { useState, useEffect } from 'react';
import firebase from './firebase';
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
  const [categories, setCategories] = useState('' as ProductType['category']);

  useEffect(() => {
    getData();
  }, []);

  const ref = firebase.firestore().collection('products');

  const getData = () => {
    ref.onSnapshot((querySnapshot) => {
      const items: any = [];
      querySnapshot.forEach(doc => {
        items.push(doc.data());
      });
      setData(items);
    })
  };

  const handleAddToCart = (selectedProduct: ProductType) => {
    setCartItems((prev) => {
      const isProductAddedToCart = prev.find(
        (product) => product.id === selectedProduct.id
      );
      if (isProductAddedToCart) {
        return prev.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, amount: product.amount + 1 }
            : product
        );
      } else {
        return [...prev, { ...selectedProduct, amount: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (selectedProduct: ProductType) => {
    setCartItems((prev) => {
      const isProductAmountLargerThanOne = prev.find(
        (product) => product.id === selectedProduct.id && product.amount > 1
      );
      if (isProductAmountLargerThanOne) {
        return prev.map((product) =>
          product.id === selectedProduct.id
            ? { ...product, amount: product.amount - 1 }
            : product
        );
      } else {
        return prev.filter((product) => product.id !== selectedProduct.id);
      }
    });
  };

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  const selectByCategory = (category: ProductType['category']) => {
    setCategories(category);
  };

  return (
    <div className='App'>
      <SearchBar cartItems={cartItems} openCart={openCart} />
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftBar selectByCategory={selectByCategory} />
        </Grid>
        <Grid item xs={8}>
          <ProductList
            data={
              !categories || categories === 'All products'
                ? data
                : data.filter(
                    (product) => product.category === categories.toLowerCase()
                  )
            }
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
