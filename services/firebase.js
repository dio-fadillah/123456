// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYkhmER8bG3wGkmS3TJ9Ij1As2hoGTvwE",
  authDomain: "binar-taskforce-team-1.firebaseapp.com",
  projectId: "binar-taskforce-team-1",
  storageBucket: "binar-taskforce-team-1.appspot.com",
  messagingSenderId: "770081196719",
  appId: "1:770081196719:web:5546cc80b2f71d953c225a",
  measurementId: "G-FCW8LXB2M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// const analytics = getAnalytics(app);