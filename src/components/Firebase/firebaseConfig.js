import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlzNgozAxs_vDy6JPzCD53IRxZbC-Jg5Y",
  authDomain: "collab-pro-95e86.firebaseapp.com",
  projectId: "collab-pro-95e86",
  storageBucket: "collab-pro-95e86.appspot.com",
  messagingSenderId: "407021586886",
  appId: "1:407021586886:web:1f98ff85ed607f02da0ac7",
  measurementId: "G-4L0H9K6F61",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
