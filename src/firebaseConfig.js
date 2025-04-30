import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA82Ws1Lxk6p_BTiODYCxD_-vO8GKu1PsE",
    authDomain: "react-juanronco.firebaseapp.com",
    projectId: "react-juanronco",
    storageBucket: "react-juanronco.firebasestorage.app",
    messagingSenderId: "1002807329904",
    appId: "1:1002807329904:web:69e5e40ea1fb89d41960b5"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);