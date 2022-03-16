import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  rating: Record<string, number>;
};

const App = () => {
  const [data, setData] = useState([] as ProductType[]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductType[]);
  const [totalItems, setTotalItems] = useState(0);
  const [categories, setCategories] = useState('' as ProductType['category']);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCartList();
  }, [totalItems]);

  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getCartList = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/carts`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddToCart = (selectedProduct: ProductType) => {
    const isProductAddedToCart = cartItems.find(
      (product) => product.id === selectedProduct.id
    );
    if (isProductAddedToCart) {
      const newCart = cartItems.filter((product) => {
        return product.id === selectedProduct.id;
      });
      newCart[0].amount++;
      axios
        .put(`${process.env.REACT_APP_SERVER}/carts/${selectedProduct.id}`, {
          newQuantity: newCart[0],
        })
        .then((response) => {console.log('Updated')})
        .catch((err) => console.error(err));
    } else {
      let data = { ...selectedProduct, amount: 1 };
      axios
        .post(`${process.env.REACT_APP_SERVER}/carts/${selectedProduct.id}`, {
          data: data,
        })
        .then((response) => console.log('Added to cart'))
        .catch((err) => console.error(err));
    }
    setTotalItems(totalItems + 1);
  };

  const handleRemoveFromCart = (selectedProduct: ProductType) => {
    const isProductAmountLargerThanOne = cartItems.find(
      (product) => product.id === selectedProduct.id && product.amount > 1
    );
    if (isProductAmountLargerThanOne) {
      const newCart = cartItems.filter((product) => {
        return product.id === selectedProduct.id
      });
      newCart[0].amount--;
      axios
        .put(`${process.env.REACT_APP_SERVER}/carts/${selectedProduct.id}`, {
          newQuantity: newCart[0],
        })
        .then((response) => console.log('Updated'))
        .catch((err) => console.error(err));
    } else {
      axios
        .delete(`${process.env.REACT_APP_SERVER}/carts/${selectedProduct.id}`)
    }
    setTotalItems(totalItems - 1);
  };

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  const selectByCategory = (category: ProductType['category']) => {
    setCategories(category);
  };

  const displayProducts = () => {
    if (search) {
      return data.filter((product) => {
        return product.title.toLowerCase().includes(search);
      });
    }

    if (!categories || categories === 'All products') {
      return data;
    } else {
      return data.filter(
        (product) => product.category === categories.toLowerCase()
      );
    }
  };

  return (
    <div className='App'>
      <SearchBar
        cartItems={cartItems}
        openCart={openCart}
        setSearch={setSearch}
      />
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
            data={displayProducts()}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
