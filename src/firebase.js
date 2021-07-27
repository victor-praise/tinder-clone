import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAxyNaZLPHHxue-CZ5_CI-SJPq_regiGJI",
    authDomain: "tinder-clone-d64a7.firebaseapp.com",
    projectId: "tinder-clone-d64a7",
    storageBucket: "tinder-clone-d64a7.appspot.com",
    messagingSenderId: "823326665301",
    appId: "1:823326665301:web:97168e7c622e68929282dc",
    measurementId: "G-3CKNB8SMFM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;