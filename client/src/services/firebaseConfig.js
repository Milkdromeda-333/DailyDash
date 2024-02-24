import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "daily-dash-1859f.firebaseapp.com",
    projectId: "daily-dash-1859f",
    storageBucket: "daily-dash-1859f.appspot.com",
    messagingSenderId: "468606700747",
    appId: "1:468606700747:web:12f0961098ad3ab6db5f4e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };