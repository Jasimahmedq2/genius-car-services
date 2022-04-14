// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnd-5pFL8b2cq7YHbWnV9uNsNEqDeeTdU",
  authDomain: "genius-car-serices.firebaseapp.com",
  projectId: "genius-car-serices",
  storageBucket: "genius-car-serices.appspot.com",
  messagingSenderId: "26427281124",
  appId: "1:26427281124:web:ba1ada7859086eee2266f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;