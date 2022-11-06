import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// your firebase config
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "testapp.firebaseapp.com",
  projectId: "testapp",
  storageBucket: "testapp.appspot.com",
  messagingSenderId: "0123456789",
  appId: "1:XXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXX",
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); // firebase db
const auth = firebase.auth(); //firebase auth
const provider = new firebase.auth.GoogleAuthProvider(); // Google auth provider
const storage = firebase.storage(); // firebase storage

export { auth, provider, storage };
export default db;
