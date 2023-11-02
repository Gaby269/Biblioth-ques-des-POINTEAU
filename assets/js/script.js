import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCgSxRqqt38faaT_nKACjz7qofM-aIHGfo",
  authDomain: "bibliotheque-pointeau.firebaseapp.com",
  projectId: "bibliotheque-pointeau",
  storageBucket: "bibliotheque-pointeau.appspot.com",
  messagingSenderId: "413650229449",
  appId: "1:413650229449:web:1793d20063380a8d5d9518",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
