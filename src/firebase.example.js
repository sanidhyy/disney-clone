import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "testapp.firebaseapp.com",
  projectId: "testapp",
  storageBucket: "testapp.appspot.com",
  messagingSenderId: "0123456789",
  appId: "1:XXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
