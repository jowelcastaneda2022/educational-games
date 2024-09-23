import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFriDtm6gSVPxeUSq4dGfUIQNB81M8_1Q",
  authDomain: "pcm-main.firebaseapp.com",
  projectId: "pcm-main",
  storageBucket: "pcm-main.appspot.com",
  messagingSenderId: "556436738145",
  appId: "1:556436738145:web:a77185316c90b59f369a20",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseApp.firestore();
const auth = firebase.auth();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, facebookProvider, googleProvider, storage };
