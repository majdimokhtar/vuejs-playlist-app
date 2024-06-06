import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBcaDFSiiFRMAdoCVuz4mx_mNzx8mY0VY0",
  authDomain: "playlist-app-2e44a.firebaseapp.com",
  projectId: "playlist-app-2e44a",
  storageBucket: "playlist-app-2e44a.appspot.com",
  messagingSenderId: "189671314683",
  appId: "1:189671314683:web:74486f2f3f01eee5e4cc5e",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
