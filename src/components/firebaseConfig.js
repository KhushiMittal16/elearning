// Import Firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";



// Your Firebase Config (Replace with your credentials)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // apiKey:"AIzaSyAdfT7xx9Hse16qptMf9mBQgZnX2UNGpkI",
  authDomain: "e-learning-9e4a5.firebaseapp.com",
  projectId: "e-learning-9e4a5",
  storageBucket: "e-learning-9e4a5.firebasestorage.app",
  messagingSenderId: "953570269035",
  appId: "1:953570269035:web:3302539bef413e9bbb1e2e",
  measurementId: "G-FTXMXSLN4Q",
};

console.log("api key",firebaseConfig.apiKey);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
