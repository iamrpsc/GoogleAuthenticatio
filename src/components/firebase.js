// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3_fOw9NKeCY6aYolohqqCGmRGMHidd_k",
  authDomain: "authproject-d81fe.firebaseapp.com",
  projectId: "authproject-d81fe",
  storageBucket: "authproject-d81fe.appspot.com",
  messagingSenderId: "355478105783",
  appId: "1:355478105783:web:7b94e29c0f3c30e9936732",
  measurementId: "G-55NW6JBZH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();
export default app;
export const db = getFirestore(app);
