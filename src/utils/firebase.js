
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtbVdJMAsuD1kWWUjjY-jywzpR_VZR7JA",
  authDomain: "netflixgpt-4f2a3.firebaseapp.com",
  projectId: "netflixgpt-4f2a3",
  storageBucket: "netflixgpt-4f2a3.firebasestorage.app",
  messagingSenderId: "993368632101",
  appId: "1:993368632101:web:276bf4ea9b2d21e735c8cc",
  measurementId: "G-28JPF5XYS8"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//console.log(analytics)
export const auth = getAuth();
