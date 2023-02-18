import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAbVbSX-xGBlZl3Bz3MahcY-q5FCbcYizU",
  authDomain: "charaproject-6ecf4.firebaseapp.com",
  projectId: "charaproject-6ecf4",
  storageBucket: "charaproject-6ecf4.appspot.com",
  messagingSenderId: "631634316122",
  appId: "1:631634316122:web:a2df28f05b1cd234ca8163"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
