// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAY6Q5ha4Bx_JJKR1oZHgAuUFRYhmlJD8c",
  authDomain: "react-c8f26.firebaseapp.com",
  projectId: "react-c8f26",
  storageBucket: "react-c8f26.appspot.com",
  messagingSenderId: "955879470624",
  appId: "1:955879470624:web:f756d437c701250b10ee45",
  measurementId: "G-C11YK1MR5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}