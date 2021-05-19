import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({ 
    apiKey: "AIzaSyCKy_lYj4ukAuMM-Xm4F8SFKQhbMrpjI78",
    authDomain: "coder-app-15a86.firebaseapp.com",
    projectId: "coder-app-15a86",
    storageBucket: "coder-app-15a86.appspot.com",
    messagingSenderId: "1055240730248",
    appId: "1:1055240730248:web:85a2b83f5de39aab4e513d"

 });
 export const  getFirebase = () => app

 export const getFirestore = () => firebase.firestore(app);