
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1G7z0QXaZ2kU1T0A8hz2PmsNCt7us3As",
  authDomain: "wearethe-86e96.firebaseapp.com",
  projectId: "wearethe-86e96",
  storageBucket: "wearethe-86e96.appspot.com",
  messagingSenderId: "835452234240",
  appId: "1:835452234240:web:c79d3004f2eacf42cb86e5"
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const storageServise = firebase.storage();


export default firebase