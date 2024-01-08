// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXRg0F31WAjW0WDI5t6TWeTaBRTamp_A",
  authDomain: "wasp-app-c13c7.firebaseapp.com",
  projectId: "wasp-app-c13c7",
  storageBucket: "wasp-app-c13c7.appspot.com",
  messagingSenderId: "538452864836",
  appId: "1:538452864836:web:9dfdb4a66706dacb493111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)
export { auth}
export {storage}