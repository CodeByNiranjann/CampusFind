import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfDrvQ4PJ31flhPwEtcH3XLwzrCY2vdIo",
  authDomain: "findback-68f09.firebaseapp.com",
  projectId: "findback-68f09",
  storageBucket: "findback-68f09.firebasestorage.app",
  messagingSenderId: "884875326011",
  appId: "1:884875326011:web:4cf56b1ef3a6390db4621e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

