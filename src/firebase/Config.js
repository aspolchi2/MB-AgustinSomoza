// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc7_n1W5bbtf_PIbxJc9jVx2pHCELbr_g",
  authDomain: "muss-bags.firebaseapp.com",
  projectId: "muss-bags",
  storageBucket: "muss-bags.appspot.com",
  messagingSenderId: "293316998511",
  appId: "1:293316998511:web:ada9cad38c742c3de2649a",
  measurementId: "G-7Z1W0CH14M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
