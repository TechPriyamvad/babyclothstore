import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxrhn0AqaOVNZboJy2L4_hUEAptnw1tVg",
  authDomain: "cloth-store-70703.firebaseapp.com",
  projectId: "cloth-store-70703",
  storageBucket: "cloth-store-70703.appspot.com",
  messagingSenderId: "3756980001",
  appId: "1:3756980001:web:e137208e3b97153669f060",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;