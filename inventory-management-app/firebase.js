// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTDwKFx_Xqsd5gfQi2iHAe_yTUsTK5Bk",
  authDomain: "inventory-tracker-d2122.firebaseapp.com",
  projectId: "inventory-tracker-d2122",
  storageBucket: "inventory-tracker-d2122.appspot.com",
  messagingSenderId: "439361129967",
  appId: "1:439361129967:web:c40a1541aa5b623265fa1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}