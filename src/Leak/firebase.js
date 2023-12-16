// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCue2vfUDClnhHbjp1JB4KAQRBwnDWPE6M",
  authDomain: "leak-gaurdian.firebaseapp.com",
  projectId: "leak-gaurdian",
  storageBucket: "leak-gaurdian.appspot.com",
  messagingSenderId: "472293809851",
  appId: "1:472293809851:web:14ca287d9cdd898c51139e",
  measurementId: "G-VPCBSN15ZN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
