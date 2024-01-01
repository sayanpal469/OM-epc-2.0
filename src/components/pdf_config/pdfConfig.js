// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0sFfuzcZw9GfsY8JOljdxy6xg5d5VzLQ",
    authDomain: "om-epc.firebaseapp.com",
    projectId: "om-epc",
    storageBucket: "om-epc.appspot.com",
    messagingSenderId: "206069971962",
    appId: "1:206069971962:web:d896518800963a11bfc243"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const pdfDB = getStorage(app)

export default pdfDB ;