import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: `${process.env.REACT_APP_APP_NAME}.firebaseapp.com`,
  projectId: process.env.REACT_APP_APP_NAME,
  storageBucket: `${process.env.REACT_APP_APP_NAME}.appspot.com`,
  databaseURL: `https://${process.env.REACT_APP_APP_NAME}-default-rtdb.firebaseio.com`,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;