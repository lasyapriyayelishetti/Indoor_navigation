// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsNnLpS2CXDeLJ8MlHKoMMuJoKic0KC9A",
  authDomain: "crudop-a24ac.firebaseapp.com",
  databaseURL: "https://crudop-a24ac-default-rtdb.firebaseio.com",
  projectId: "crudop-a24ac",
  storageBucket: "crudop-a24ac.appspot.com",
  messagingSenderId: "544317789918",
  appId: "1:544317789918:web:bdc3c5873dd2eb0e09544f",
  measurementId: "G-G6F6JT3VYX"
};

// Initialize Firebase

let app;
if(firebase.apps.length===0)
{
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
}
const auth=firebase.auth()
export { auth };

