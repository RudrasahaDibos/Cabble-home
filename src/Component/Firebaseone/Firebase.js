// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6h2SC5egw6P9pe7DiYQF5DJFXaD8FocY",
  authDomain: "cabble-home-project.firebaseapp.com",
  projectId: "cabble-home-project",
  storageBucket: "cabble-home-project.firebasestorage.app",
  messagingSenderId: "210029474065",
  appId: "1:210029474065:web:37a76b99baf98fc3c65cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth 