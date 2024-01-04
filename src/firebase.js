import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnIW4dGTrl4iVh7g6XEdEgooU5LQAJhTs",
  authDomain: "react-portfolio-manisha.firebaseapp.com",
  projectId: "react-portfolio-manisha",
  storageBucket: "react-portfolio-manisha.appspot.com",
  messagingSenderId: "149262148862",
  appId: "1:149262148862:web:20e61aae8f0eff2f6b71af",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
