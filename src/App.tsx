import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from './firebase';
import './App.css';
import ProductList from './components/products/ProductList';
import { Grid, Drawer } from '@mui/material';
import LeftBar from './components/LeftBar/LeftBar';
import SearchBar from './components/SearchBar/SearchBar';
import Cart from './components/Cart/Cart';
import { getDatabase, ref, set, onValue, query, remove } from 'firebase/database';

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
  const [categories, setCategories] = useState('' as ProductType['category']);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getCartList();
  }, []);

  const getData = () => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(err => {
        console.error(err);
      })
  };
  // const getData = () => {
  //   const productCollection = firebase.firestore().collection('products');
  //   productCollection.onSnapshot((querySnapshot) => {
  //     const items: any = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setData(items);
  //   });
  // };

  const getCartList = () => {
    // let cartsDb = getDatabase();
    // const dbRef = ref(cartsDb, '/carts');
    // onValue(query(dbRef), (snapshot) => {
    //   const carts = [];
    //   for (let id in snapshot.val()) {
    //     carts.push(snapshot.val()[id]);
    //   }
    //   setCartItems(carts);
    // });
  }

  const handleAddToCart = (selectedProduct: ProductType) => {
    // let cartsDb = getDatabase();
    // const isProductAddedToCart = cartItems.find(
    //   (product) => product.id === selectedProduct.id
    // );
    // if (isProductAddedToCart) {
    //   const newCart = cartItems.filter((product) => {
    //     return product.id === selectedProduct.id
    //   });
    //   newCart[0].amount++;
    //   set(ref(cartsDb, `carts/${selectedProduct.id}`), newCart[0]);
    // } else {
    //   set(ref(cartsDb, `carts/${selectedProduct.id}`), { ...selectedProduct, amount: 1 });
    // }
  };

  const handleRemoveFromCart = (selectedProduct: ProductType) => {
    // let cartsDb = getDatabase();
    // const isProductAmountLargerThanOne = cartItems.find(
    //   (product) => product.id === selectedProduct.id && product.amount > 1
    // );
    // if (isProductAmountLargerThanOne) {
    //   const newCart = cartItems.filter((product) => {
    //     return product.id === selectedProduct.id
    //   });
    //   newCart[0].amount--;
    //   set(ref(cartsDb, `carts/${selectedProduct.id}`), newCart[0]);
    // } else {
    //   remove(ref(cartsDb, `carts/${selectedProduct.id}`));
    // }
  };

  const openCart = () => {
    setCartOpen(!cartOpen);
  };

  const selectByCategory = (category: ProductType['category']) => {
    setCategories(category);
  };

  const displayProducts = () => {
    if (search) {
      return data.filter(product => {
        return product.title.toLowerCase().includes(search);
      })
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
