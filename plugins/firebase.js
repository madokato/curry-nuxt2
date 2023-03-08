import firebase from "firebase/app";
import "firebase/firestore"
const config ={
    apiKey: "AIzaSyBSvIZd_mesFKv7YPq479FpIAWRE8hWu5E",
    authDomain: "curry-app-3e233.firebaseapp.com", 
    projectId: "curry-app-3e233",
    storageBucket: "curry-app-3e233.appspot.com",
    messagingSenderId: "2817963061",
    appId: "1:2817963061:web:64c7d0b8ebc4b5c3c2ed7c",
    measurementId: "G-W409BLLCYM"
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
    
}

export default firebase
