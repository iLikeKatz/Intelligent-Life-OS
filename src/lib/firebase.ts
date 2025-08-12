// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyDyUL2iVMO6YbiTJryJ3jew8K4E5xwP_Uc",

  authDomain: "intelligent-life-os.firebaseapp.com",

  projectId: "intelligent-life-os",

  storageBucket: "intelligent-life-os.firebasestorage.app",

  messagingSenderId: "863025339823",

  appId: "1:863025339823:web:27e1b57cefd2071700235a",

  measurementId: "G-Y7KEJQY989"

};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
//export const storage = getStorage(app);