// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhusnTTWU8MLXhoSpnEWaR-wSAuhFO9Xk",
  authDomain: "ncnft-5acac.firebaseapp.com",
  projectId: "ncnft-5acac",
  storageBucket: "ncnft-5acac.appspot.com",
  messagingSenderId: "775562077236",
  appId: "1:775562077236:web:6c286f37f8f4aa41b31661",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
module.exports = getAuth(app);
