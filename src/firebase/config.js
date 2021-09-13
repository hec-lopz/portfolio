// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnlQuITvrnJzJUtrYVPmmV3UcX8324U-8",
  authDomain: "heclopzportfolio-62d12.firebaseapp.com",
  projectId: "heclopzportfolio-62d12",
  storageBucket: "heclopzportfolio-62d12.appspot.com",
  messagingSenderId: "606029546804",
  appId: "1:606029546804:web:677f87716300d9a377d161",
  measurementId: "G-4S4XP6FDMP",
};
initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
