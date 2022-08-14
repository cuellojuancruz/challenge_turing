// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYr1wMEdQ23-smxoid-cK3jl9xJD7c3q8",
  authDomain: "challengturing.firebaseapp.com",
  projectId: "challengturing",
  storageBucket: "challengturing.appspot.com",
  messagingSenderId: "338866709669",
  appId: "1:338866709669:web:5789be6a0af2e49e25594c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)