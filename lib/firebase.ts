import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD31Zv18pa27shAjT2TlrDdgftXG7vzNLM",
  authDomain: "chowk-oms.firebaseapp.com",
  projectId: "chowk-oms",
  storageBucket: "chowk-oms.firebasestorage.app",
  messagingSenderId: "19366073055",
  appId: "1:19366073055:web:f6341dcdcca1c72ba70f6a",
  measurementId: "G-VXW303LMJ4"
};

// Initialize Firebase (singleton pattern for Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
