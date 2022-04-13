// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpLVQlWVfiAMts0K7buPmtnSHsO-JmFXQ",
  authDomain: "router-firebase-adbf0.firebaseapp.com",
  projectId: "router-firebase-adbf0",
  storageBucket: "router-firebase-adbf0.appspot.com",
  messagingSenderId: "115786667570",
  appId: "1:115786667570:web:004674d7e3e9a521430e2b",
  measurementId: "G-1PMVMV04MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };