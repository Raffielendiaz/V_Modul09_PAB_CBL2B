import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyC2F1g5cnnmNHwnc8VYbnayR4Ktmnvpx3Y",
    authDomain: "first-project-28514.firebaseapp.com",
    projectId: "first-project-28514",
    storageBucket: "first-project-28514.appspot.com",
    messagingSenderId: "495332257830",
    appId: "1:495332257830:web:7d9cf1a8bc0b1b8c3df6e7"
});

const FIREBASE = firebase;

export default FIREBASE;