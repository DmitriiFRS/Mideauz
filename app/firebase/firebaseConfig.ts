import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
   authDomain: "mideauz-rac.firebaseapp.com",
   projectId: "mideauz-rac",
   storageBucket: "mideauz-rac.appspot.com",
   messagingSenderId: "933928630883",
   appId: "1:933928630883:web:1045a1f803eb5a6fa15656",
   measurementId: "G-8ENNM6DZPS",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
