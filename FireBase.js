import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBzTJBOtaUNqP7dl15vmVJ64aCWJN6otIk",
  authDomain: "homepage-demo-4c6bb.firebaseapp.com",
  projectId: "homepage-demo-4c6bb",
  storageBucket: "homepage-demo-4c6bb.appspot.com",
  messagingSenderId: "731440488384",
  appId: "1:731440488384:web:24e84d4ee0f298c01cf225",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
