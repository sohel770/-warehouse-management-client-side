// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7lPvwwtUu0LfqA_RH5XmbGGSLOCCZiFg",
  authDomain: "warehouse-management-fdb62.firebaseapp.com",
  projectId: "warehouse-management-fdb62",
  storageBucket: "warehouse-management-fdb62.appspot.com",
  messagingSenderId: "824664350283",
  appId: "1:824664350283:web:65213b0ebd05ae02e537ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;