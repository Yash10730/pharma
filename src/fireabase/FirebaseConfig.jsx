// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBB7jZbQ4nRToGlRuRJiogHV6t_WOFD0",
  authDomain: "e-commerce-8d932.firebaseapp.com",
  projectId: "e-commerce-8d932",
  storageBucket: "e-commerce-8d932.appspot.com",
  messagingSenderId: "403666794047",
  appId: "1:403666794047:web:025401720a992ba1a4ea8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}