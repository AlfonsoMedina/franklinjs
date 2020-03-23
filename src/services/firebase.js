import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAOb-fm7sMd45LMvn6OgA2Fq8qMAUPI1EQ",
    authDomain: "tare-online.firebaseapp.com",
    databaseURL: "https://tare-online.firebaseio.com",
    projectId: "tare-online",
    storageBucket: "tare-online.appspot.com",
    messagingSenderId: "488585083530",
    appId: "1:488585083530:web:807f5108fe9d3532cf0b73",
    measurementId: "G-KNHL83G4HW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



export function gmailLogin(){
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider).then(result =>{
        //console.log(result.user)
        localStorage.setItem('user', JSON.stringify(result.user))
        return result.user
    })
}

  export default firebase;