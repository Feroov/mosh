import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAWrnAyKT1EXrc2fDuAd_ZgWiZrbBoFfPc",
    authDomain: "mosh-700ea.firebaseapp.com",
    projectId: "mosh-700ea",
    storageBucket: "mosh-700ea.appspot.com",
    messagingSenderId: "234686945049",
    appId: "1:234686945049:web:593a706af1c2da30da9788"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()