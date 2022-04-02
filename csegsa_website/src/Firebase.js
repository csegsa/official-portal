// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAImMGEfzCovzulnbeoEGJShh5rB02a8l8",
  authDomain: "csegsaauth.firebaseapp.com",
  projectId: "csegsaauth",
  storageBucket: "csegsaauth.appspot.com",
  messagingSenderId: "449169508463",
  appId: "1:449169508463:web:75e42d909f284413aee59a",
  measurementId: "G-X0W442WL6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signOutOfGoogle = () => signOut(auth);