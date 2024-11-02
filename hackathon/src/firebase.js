// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEPxYF2CvuFWLPXyFhfbNSrAVA6-90D4",
  authDomain: "hackathon1-d1b8d.firebaseapp.com",
  projectId: "hackathon1-d1b8d",
  storageBucket: "hackathon1-d1b8d.firebasestorage.app",
  messagingSenderId: "121307054309",
  appId: "1:121307054309:web:b96d8fb6bb1e81a94b140c",
  measurementId: "G-H9WLDQG6P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


