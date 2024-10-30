import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBes3cPMp-u5SVtHw4jpLlqv8ybYwClN5I",
  authDomain: "classroom-clone-cdbd5.firebaseapp.com",
  projectId: "classroom-clone-cdbd5",
  storageBucket: "classroom-clone-cdbd5.appspot.com",
  messagingSenderId: "464199771125",
  appId: "1:464199771125:web:0a93f606a30c9b7460b6bc",
  measurementId: "G-MGPB6Q50YE",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
