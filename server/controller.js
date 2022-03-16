const firebase = require('../firebase');
const { getDatabase, ref, set, onValue, query } = require();

// const productCollection = firebase.firestore().collection('products');

const controller = {
  getAll: function (req, res) {
    // const citiesRef = db.collection('products');
    // const snapshot = citiesRef.get();
    // snapshot.forEach((doc) => {
    //   console.log(doc.id, '=>', doc.data());
    // });
    // productCollection.onSnapshot((querySnapshot) => {
    //   const items: any = [];
    //   querySnapshot.forEach((doc) => {
    //     items.push(doc.data());
    //   });
    //   res.status(200).send(items);
    // });
  },
};

module.exports = controller;
