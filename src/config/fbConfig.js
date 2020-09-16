import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js"></script>
//
// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-analytics.js"></script>


    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    let firebaseConfig = {
    apiKey: "AIzaSyAjdzBy6dErdHhWasclkWt3VKrwUHbhVCQ",
    authDomain: "give-away-13d62.firebaseapp.com",
    databaseURL: "https://give-away-13d62.firebaseio.com",
    projectId: "give-away-13d62",
    storageBucket: "give-away-13d62.appspot.com",
    messagingSenderId: "144645867658",
    appId: "1:144645867658:web:dc62a46666f8a17fd28573",
    measurementId: "G-69STCLCK7X"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.firestore.settings( {timestampsInSnapshots: true} );
    // firebase.analytics();

export default firebase;