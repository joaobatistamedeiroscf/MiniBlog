// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRFd_yOJ6ZOcG46q5TLMNv2mtmO_9qVMI",
  authDomain: "miniblog-752fa.firebaseapp.com",
  projectId: "miniblog-752fa",
  storageBucket: "miniblog-752fa.firebasestorage.app",
  messagingSenderId: "470290815272",
  appId: "1:470290815272:web:d30169a8fd4820eda1d81d",
  measurementId: "G-0S3TMC254Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);