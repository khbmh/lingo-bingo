// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYWwlE6_W_DqZ5D_5lR_JbVXn090ftATc',
  authDomain: 'lingo-bingo-khbmh.firebaseapp.com',
  projectId: 'lingo-bingo-khbmh',
  storageBucket: 'lingo-bingo-khbmh.firebasestorage.app',
  messagingSenderId: '268044506130',
  appId: '1:268044506130:web:d7c90675f8619e7e08b4cb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
