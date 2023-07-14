import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyC2Oe0SBlslYwwbkIY6ixJrQpksc8n8I78",
  authDomain: "linkedin-clone-8510e.firebaseapp.com",
  projectId: "linkedin-clone-8510e",
  storageBucket: "linkedin-clone-8510e.appspot.com",
  messagingSenderId: "1023815300769",
  appId: "1:1023815300769:web:ddef2168af1817c99ca2e0",
  measurementId: "G-EKDS1XGY9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth,provider,storage};
export default db;
