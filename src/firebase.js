import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjzLLRTdJ5w9ljxg61wHiruAXsU33i0I4',
  authDomain: 'react-ecommerce-93da5.firebaseapp.com',
  projectId: 'react-ecommerce-93da5',
  storageBucket: 'react-ecommerce-93da5.appspot.com',
  messagingSenderId: '966670107175',
  appId: '1:966670107175:web:bef6719c88c3d92d92c402',
  measurementId: 'G-V0GVFP2YS8',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
