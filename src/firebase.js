import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAq8CUM-g5aFNi7XqeNsaqgAvSEuhWrtlE",
  authDomain: "gramboy-4d160.firebaseapp.com",
  projectId: "gramboy-4d160",
  storageBucket: "gramboy-4d160.appspot.com",
  messagingSenderId: "745062905541",
  appId: "1:745062905541:web:5c9e95b18b1e3af65422ac",
  measurementId: "G-SW62FHWYTH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { app, analytics, storage};
