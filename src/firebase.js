import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBF6b5GcipWra0K1NqI97KZ7Vjss2rnCt8",
  authDomain: "slack-clone-2fcda.firebaseapp.com",
  projectId: "slack-clone-2fcda",
  storageBucket: "slack-clone-2fcda.appspot.com",
  messagingSenderId: "129496907548",
  appId: "1:129496907548:web:53e2882b68bf92644884d9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
