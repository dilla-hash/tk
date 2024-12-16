import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_KEY,
  authDomain: "toko-teguh.firebaseapp.com",
  projectId: "toko-teguh",
  storageBucket: "toko-teguh.firebasestorage.app",
  messagingSenderId: "148894422644",
  appId: "1:148894422644:web:46dbfdc98b5157208ce321",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
