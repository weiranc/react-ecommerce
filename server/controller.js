const { getDatabase, ref, set, remove } = require('firebase/database');
const { firestore } = require('firebase/compat/firestore');
const { database } = require('firebase/compat/database');
const firebase = require('./firebase');

const controller = {
  getAll: function (req, res) {
    const productCollection = firebase.firestore().collection('products');
    productCollection.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      return res.status(200).send(items);
    });
  },
  getCart: function (req, res) {
    let ref = firebase.database().ref('carts');
    ref.once('value', (snapshot) => {
      const carts = [];
      for (let id in snapshot.val()) {
        carts.push(snapshot.val()[id]);
      }
      return res.status(200).send(carts);
    });
  },
  addToCart: function (req, res) {
    let cartsDb = getDatabase();
    set(ref(cartsDb, `/carts/${req.params.id}`), req.body.data);
    return res.status(204).send('success');
  },
  updateCart: function (req, res) {
    let cartsDb = getDatabase();
    set(ref(cartsDb, `/carts/${req.params.id}`), req.body.newQuantity);
    return res.status(204).send('success');
  },
  removeFromCart: function (req, res) {
    let cartsDb = getDatabase();
    remove(ref(cartsDb, `/carts/${req.params.id}`));
    return res.status(204).send('success');
  },
};

module.exports = controller;
