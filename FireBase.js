import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxnWRa1jZgwz27EV-8CX0vbXMNx9sr5bk",
  authDomain: "clone-64ade.firebaseapp.com",
  projectId: "clone-64ade",
  storageBucket: "clone-64ade.appspot.com",
  messagingSenderId: "1060485170447",
  appId: "1:1060485170447:web:85d8e2ad3beab5c70f2a7a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseCon)
  : firebase.app();

const db = app.firestore();
export default db;
