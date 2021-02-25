import firebase from "firebase"

const firebaseConfig = {
   apiKey: "AIzaSyCtM6UZ_8XNGPFNfrg0edihbwj8bFRcPKA",
   authDomain: "slack-clone-e303f.firebaseapp.com",
   projectId: "slack-clone-e303f",
   storageBucket: "slack-clone-e303f.appspot.com",
   messagingSenderId: "966148418266",
   appId: "1:966148418266:web:3b45849d1a7a1a32e253e3"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebase.firestore()

 export default db;