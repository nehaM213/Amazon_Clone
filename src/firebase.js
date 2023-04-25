import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4K7Na8q6UK4NsBtNvD1cexfa6qjKr7Eo",
  authDomain: "clone-674ea.firebaseapp.com",
  projectId: "clone-674ea",
  storageBucket: "clone-674ea.appspot.com",
  messagingSenderId: "482244794298",
  appId: "1:482244794298:web:1e61c4f7bcd4b23f42af83",
  measurementId: "G-JNXCTYM2FC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
