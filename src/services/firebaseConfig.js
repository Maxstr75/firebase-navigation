// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAK4-cUgFN91ERrihTKrkXBN3hDDCs4qqc',
  authDomain: 'goit-ee602.firebaseapp.com',
  projectId: 'goit-ee602',
  storageBucket: 'goit-ee602.appspot.com',
  messagingSenderId: '94009636200',
  appId: '1:94009636200:web:4415f7a41a55e847f2d2dd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
