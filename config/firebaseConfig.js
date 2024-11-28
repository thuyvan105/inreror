// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "long-thanh-dev.firebaseapp.com",
  projectId: "long-thanh-dev", 
  storageBucket: "long-thanh-dev.firebasestorage.app",
  messagingSenderId: "666484827493",
  appId: "1:666484827493:web:04e9d1bdd615eddd8bed8c",
  measurementId: "G-6452PDDBP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)