// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GEMINIAI_KEY,
  authDomain: "netflixgpt00.firebaseapp.com",
  projectId: "netflixgpt00",
  storageBucket: "netflixgpt00.appspot.com",
  messagingSenderId: "1016118646013",
  appId: "1:1016118646013:web:c2f94a84deedf22bce9a94",
  measurementId: "G-Q1L72BVLFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
