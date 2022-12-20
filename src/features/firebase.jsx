import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3NI1gm2knaNFkSuA_2mx27be3I370htA",
    authDomain: "clone-49f7f.firebaseapp.com",
    databaseURL: "https://clone-49f7f-default-rtdb.firebaseio.com",
    projectId: "clone-49f7f",
    storageBucket: "clone-49f7f.appspot.com",
    messagingSenderId: "638698209351",
    appId: "1:638698209351:web:f718cd8bf8324bfd577162"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const firestore = firebase.firestore()
  const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp()
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }
  export {firestore, serverTimestamp}