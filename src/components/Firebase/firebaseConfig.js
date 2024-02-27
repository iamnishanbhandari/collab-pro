import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS2LzkWu3iwzvL5RpL3zB40iLMCebnMUo",
  authDomain: "infu-lab.firebaseapp.com",
  projectId: "infu-lab",
  storageBucket: "infu-lab.appspot.com",
  messagingSenderId: "898395513893",
  appId: "1:898395513893:web:9db00905c8079ac03dcbcc",
  measurementId: "G-81SYM8Y1VE",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
