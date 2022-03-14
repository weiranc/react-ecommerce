import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
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
      HELLO
    </div>
  );
};

export default App;
