import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCwcdxj6glmAF-nS_xCw5BLoutZ75F5P3I",
  authDomain: "book-santa-c63ee.firebaseapp.com",
  databaseURL: "https://book-santa-c63ee.firebaseio.com",
  projectId: "book-santa-c63ee",
  storageBucket: "book-santa-c63ee.appspot.com",
  messagingSenderId: "225871037720",
  appId: "1:225871037720:web:1a608243f2ae8233960a6d",
  measurementId: "G-DBP6ZWMFKN"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
