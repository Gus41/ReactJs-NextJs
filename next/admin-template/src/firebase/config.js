import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyDYKRtx6Cpj4v8bQsHo4GHotroM0xmSC4c",
    authDomain: "admin-template-d9b86.firebaseapp.com",
     projectId: "admin-template-d9b86",
  })
}

export default firebase