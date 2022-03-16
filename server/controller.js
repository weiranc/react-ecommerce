const { getDatabase, ref, set, onValue, query } = require('firebase/database');
const { firestore } = require('firebase/compat/firestore');
const firebase = require('./firebase');

const controller = {
  getAll: function (req, res) {
    const productCollection = firebase.firestore().collection('products');
    productCollection.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      res.status(200).send(items);
    });
  },
};

module.exports = controller;
