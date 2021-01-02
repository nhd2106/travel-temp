import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7GqAOiIzscREzx4Wvs0x47a7-QMja3hE",
    authDomain: "travel-app-c8096.firebaseapp.com",
    projectId: "travel-app-c8096",
    storageBucket: "travel-app-c8096.appspot.com",
    messagingSenderId: "847296186773",
    appId: "1:847296186773:web:02ded1f514f370fe77ce9c",
    measurementId: "G-S9QC41WXLJ"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();  

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;