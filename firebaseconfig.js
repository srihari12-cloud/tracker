// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUMzLBfW6FjQzZgyflsQ71qT_PENQHc9w",
  authDomain: "kiddoloco-1210.firebaseapp.com",
  projectId: "kiddoloco-1210",
  storageBucket: "kiddoloco-1210.appspot.com",
  messagingSenderId: "445531163423",
  appId: "1:445531163423:web:9a7366a24e56402327be2a",
  measurementId: "G-NW4Q71HXD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


// IOS:386227209879-gi8o9g025h3a0rjr8vp2o729uke9u85r.apps.googleusercontent.com
// Android:386227209879-9ajc61cq0uooldscpoe98hdd9g1aq0ed.apps.googleusercontent.com