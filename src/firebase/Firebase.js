import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  
  apiKey: "AIzaSyDSe102cmVR7SJNd_FAWIS2x37MEo7mxiE",
  authDomain: "thebank-744fc.firebaseapp.com",
  projectId: "thebank-744fc",
  storageBucket: "thebank-744fc.appspot.com",
  messagingSenderId: "1020073766173",
  appId: "1:1020073766173:web:5e1242246b61807cdec5f4",
  measurementId: "G-ZJ6DG6V397"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
export default firebase
