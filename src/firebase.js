import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "abhyas-2dcd0.firebaseapp.com",
  projectId: "abhyas-2dcd0",
  storageBucket: "abhyas-2dcd0.appspot.com",
  messagingSenderId: "323830701169",
  appId: "1:323830701169:web:357a68e4d754a93506cfd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
