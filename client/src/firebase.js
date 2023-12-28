// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-page-b1dcc.firebaseapp.com",
  projectId: "real-estate-page-b1dcc",
  storageBucket: "real-estate-page-b1dcc.appspot.com",
  messagingSenderId: "394562460785",
  appId: "1:394562460785:web:6f0aa7677cf5cbe471cfd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
