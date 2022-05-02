// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDeCQ1Mxk-mJKhxFkffRgGsAeS7b7mlr2k',
  authDomain: 'csegsa-portal.firebaseapp.com',
  projectId: 'csegsa-portal',
  storageBucket: 'csegsa-portal.appspot.com',
  messagingSenderId: '373600202068',
  appId: '1:373600202068:web:9be282b79ad32b46316cc1',
  measurementId: 'G-YKV2Y4QGW7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  hd: 'tamu.edu'
})

export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const signOutOfGoogle = () => signOut(auth)

// ZbuPmkveYYelvnR2AmsMKl1etF83
