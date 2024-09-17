// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");

const { getStorage, ref } = require("firebase/storage");


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ztealer-bcf8f.firebaseapp.com",
  projectId: "ztealer-bcf8f",
  storageBucket: "ztealer-bcf8f.appspot.com",
  messagingSenderId: "841807369453",
  appId: "1:841807369453:web:95b6916261f79d2df328e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


module.exports={app,storage}