import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9eRErrsPPtZYxhvqWsvQpCgY4RoaY36w",
  authDomain: "stack-overflow-clone-c5884.firebaseapp.com",
  projectId: "stack-overflow-clone-c5884",
  storageBucket: "gs://stack-overflow-clone-c5884.appspot.com",
  messagingSenderId: "810019244274",
  appId: "1:810019244274:web:0a048f297495e28abe686b",
  measurementId: "G-EXRZSB2B6D",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const dataRed = firebase.database();
export const storage = firebase.storage();
export default app;
