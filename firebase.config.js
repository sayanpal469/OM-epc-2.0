// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYteeXoZb9UqCkqLIhC2xq2eoCJlx413c",
  authDomain: "omepctwo-8e526.firebaseapp.com",
  projectId: "omepctwo-8e526",
  storageBucket: "omepctwo-8e526.appspot.com",
  messagingSenderId: "804049883664",
  appId: "1:804049883664:web:ca095191bf393105943095",
  measurementId: "G-VNE3LKZMKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);