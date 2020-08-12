import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDryGS7cLaRtSpetr15hcF7MrLF7xipbZc",
    authDomain: "photo-gallery-c4789.firebaseapp.com",
    databaseURL: "https://photo-gallery-c4789.firebaseio.com",
    projectId: "photo-gallery-c4789",
    storageBucket: "photo-gallery-c4789.appspot.com",
    messagingSenderId: "246250313685",
    appId: "1:246250313685:web:dc056906e23922879e4f5c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };