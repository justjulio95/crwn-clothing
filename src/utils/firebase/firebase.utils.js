import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB2eBUeNx8v5myKU-b70fp6nQ-QbmiKnRM",
  authDomain: "crwn-db-6a838.firebaseapp.com",
  projectId: "crwn-db-6a838",
  storageBucket: "crwn-db-6a838.appspot.com",
  messagingSenderId: "715495997563",
  appId: "1:715495997563:web:6ed83cbbe4ac825d0b22de"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)