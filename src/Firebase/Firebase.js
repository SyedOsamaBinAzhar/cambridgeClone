import firebase from "firebase/app";//import kiya SDK se firebase
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCEYpiH8muFb6SBYUhOyc-l9MwdxiIbVnM",
    authDomain: "cambridge-clone.firebaseapp.com",
    projectId: "cambridge-clone",
    storageBucket: "cambridge-clone.appspot.com",
    messagingSenderId: "1083583073009",
    appId: "1:1083583073009:web:5d6fd27ad102914e283750"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export let auth = firebase.auth();
export let firestore = firebase.firestore();
export let storage = firebase.storage();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

export default firebase;


