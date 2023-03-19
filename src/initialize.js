import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9w6imDfnQff9aFBUibobWYu9-DB3PZC4",
    authDomain: "nccf-rivers.firebaseapp.com",
    databaseURL: "https://nccf-rivers-default-rtdb.firebaseio.com",
    projectId: "nccf-rivers",
    storageBucket: "nccf-rivers.appspot.com",
    messagingSenderId: "541456928146",
    appId: "1:541456928146:web:46cb798925a19e045a054b",
    measurementId: "G-1YD27KB2CL"
};

// initialize
// initializeApp(firebaseConfig);
export { firebaseConfig, initializeApp }