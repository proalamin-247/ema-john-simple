// Import the functions you need from the SDKs you need
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABQ9KRrc6WrbHkk-GlO9Iyhkcjp9Dt0ic",
    authDomain: "ema-john-simple-ba46c.firebaseapp.com",
    projectId: "ema-john-simple-ba46c",
    storageBucket: "ema-john-simple-ba46c.appspot.com",
    messagingSenderId: "962837256889",
    appId: "1:962837256889:web:ad89c1268bc71e87045968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;