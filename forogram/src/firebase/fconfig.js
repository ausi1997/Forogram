import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAwy5adgjgpl8nYMMXMf2YvnvZ9Gq4RLmI",
    authDomain: "ausi-fotogram.firebaseapp.com",
    projectId: "ausi-fotogram",
    storageBucket: "ausi-fotogram.appspot.com",
    messagingSenderId: "669787411193",
    appId: "1:669787411193:web:9edfcbaa80a09a38a60828"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const Storage = firebase.storage();
  const Firestore = firebase.firestore();

  export {Storage,Firestore};

