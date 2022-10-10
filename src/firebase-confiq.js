// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC58d0d7eb2_y1SdJ9UBlayiAjCqqn2lSA",
  authDomain: "red-peyaj.firebaseapp.com",
  projectId: "red-peyaj",
  storageBucket: "red-peyaj.appspot.com",
  messagingSenderId: "564490747788",
  appId: "1:564490747788:web:c9f1103f955950e4b560a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;