// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCWuZEd9RgjWtVe81Ymag-5B5ANfnxk2zQ",
    authDomain: "leifii.firebaseapp.com",
    projectId: "leifii",
    storageBucket: "leifii.appspot.com",
    messagingSenderId: "831239705658",
    appId: "1:831239705658:web:05bbf92d7d785ea91b1103",
    measurementId: "G-KMW5WNC5W9"
  };
  

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
