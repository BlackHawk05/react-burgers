import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database' /*realtime database*/

const config = {
  apiKey: "AIzaSyANCRr5DQrEJh5jVWbu4UME0hRxZq_uEVk",
  authDomain: "my-app-burgers.firebaseapp.com",
  databaseURL: "https://my-app-burgers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-app-burgers",
  storageBucket: "my-app-burgers.appspot.com",
  messagingSenderId: "415302177296",
  appId: "1:415302177296:web:b04c37f85e360146c47095"
}

function initFirebase() {
  if (!firebase.apps.length) {
    return firebase.initializeApp(config)
  }
  return firebase
}
const firebaseApp = initFirebase()
const db = Rebase.createClass(firebaseApp.database())

export { db, firebaseApp }
