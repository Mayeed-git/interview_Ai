// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIOh8q0VM6aaj6r9GyK-V7P2tuQeCBw4g",
    authDomain: "interviewai-4ed1d.firebaseapp.com",
    projectId: "interviewai-4ed1d",
    storageBucket: "interviewai-4ed1d.firebasestorage.app",
    messagingSenderId: "502527793776",
    appId: "1:502527793776:web:0f55e466b929d3c0e1b2b5",
    measurementId: "G-MCXRC9C27R"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);