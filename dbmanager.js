// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoVUb-28Rf-0JzOf-JR2Tw3fM2zoXL00w",
  authDomain: "atalproject.firebaseapp.com",
  projectId: "atalproject",
  storageBucket: "atalproject.appspot.com",
  messagingSenderId: "934011491472",
  appId: "1:934011491472:web:3545bbd3a66565defa3415",
  measurementId: "G-5FQ328V42Y"
};

// Initialize Firebase
const dbmanger = initializeApp(firebaseConfig);
export default dbmanger;

