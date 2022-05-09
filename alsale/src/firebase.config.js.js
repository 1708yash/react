// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzObNgEBjChwRdTK-62utusvpGj0DHWF8",
    authDomain: "alsale-92c92.firebaseapp.com",
    projectId: "alsale-92c92",
    storageBucket: "alsale-92c92.appspot.com",
    messagingSenderId: "828067515844",
    appId: "1:828067515844:web:4debaf0bbc59d39e262891",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();