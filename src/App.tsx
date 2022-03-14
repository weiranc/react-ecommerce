import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/products/ProductList';

export type ProductType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const App = () => {
  const [data, setData] = useState([] as ProductType[]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setData(response.data);
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='App'>
      <ProductList data={data}/>
    </div>
  );
};

export default App;
