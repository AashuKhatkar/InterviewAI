import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-b62aa.firebaseapp.com",
  projectId: "interviewai-b62aa",
  storageBucket: "interviewai-b62aa.firebasestorage.app",
  messagingSenderId: "380670723839",
  appId: "1:380670723839:web:001e3a84903f1c39292eca",
  measurementId: "G-9V5ZLP706N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}