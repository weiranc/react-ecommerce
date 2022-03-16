const {
  getDatabase,
  ref,
  set,
  onValue,
  query,
  remove,
} = require('firebase/database');
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
  getCart: function (req, res) {
    let cartsDb = getDatabase();
    const dbRef = ref(cartsDb, '/carts');
    onValue(query(dbRef), (snapshot) => {
      const carts = [];
      for (let id in snapshot.val()) {
        carts.push(snapshot.val()[id]);
      }
      res.status(200).send(carts);
    });
  },
  addToCart: function (req, res) {
    let cartsDb = getDatabase();
    set(ref(cartsDb, `/carts/${req.params.id}`), req.body.data);
    res.status(204).send('success');
  },
  updateCart: function (req, res) {
    let cartsDb = getDatabase();
    set(ref(cartsDb, `/carts/${req.params.id}`), req.body.newQuantity);
    res.status(204).send('success');
  },
  removeFromCart: function (req, res) {
    let cartsDb = getDatabase();
    remove(ref(cartsDb, `carts/${req.params.id}`));
    res.status(204).send('success');
  },
};

module.exports = controller;
