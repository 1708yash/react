import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBwa9q67lcpTIHoidkBLgGJwTgso9QvSHI",
    authDomain: "cusast-b7cee.firebaseapp.com",
    projectId: "cusast-b7cee",
    storageBucket: "cusast-b7cee.appspot.com",
    messagingSenderId: "389910008303",
    appId: "1:389910008303:web:71d075e4cec7cbbdcfa61a",
    measurementId: "G-57DNDC16WD"
};

export const Firebase = firebase.initializeApp(firebaseConfig)//named export
