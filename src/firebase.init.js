import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAeP_6CfsZ5NsIn-ZH73mArDMGOfLoBW7g",
  authDomain: "uiu-club-forum.firebaseapp.com",
  projectId: "uiu-club-forum",
  storageBucket: "uiu-club-forum.appspot.com",
  messagingSenderId: "626674382976",
  appId: "1:626674382976:web:005ed9eb3d3ac9dd00ce65",
  measurementId: "G-M4R9Z4NZ2V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
