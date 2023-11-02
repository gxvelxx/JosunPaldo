// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEQOynA_qyds-M2_G4JhoHARXVBA4rJy0",
  authDomain: "tour-map-4bb32.firebaseapp.com",
  projectId: "tour-map-4bb32",
  storageBucket: "tour-map-4bb32.appspot.com",
  messagingSenderId: "536997371221",
  appId: "1:536997371221:web:4a4b16bb341dd7ced563dc",
  measurementId: "G-BWWDLH70Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
