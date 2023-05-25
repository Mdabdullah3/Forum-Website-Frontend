// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWRRq3UaFO4QQZpoPGETKN_v5nEXw6zFQ",
  authDomain: "uiuclubforum.firebaseapp.com",
  projectId: "uiuclubforum",
  storageBucket: "uiuclubforum.appspot.com",
  messagingSenderId: "396032646645",
  appId: "1:396032646645:web:2c58717f2f9b5e1320d4bc",
  measurementId: "G-F95NL76RNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
