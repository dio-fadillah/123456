import { initializeApp, getApps } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import 'firebase/storage'
import { UserProvider } from "../context/user";



const firebaseConfig = {
    apiKey: "AIzaSyAYkhmER8bG3wGkmS3TJ9Ij1As2hoGTvwE",
    authDomain: "binar-taskforce-team-1.firebaseapp.com",
    projectId: "binar-taskforce-team-1",
    storageBucket: "binar-taskforce-team-1.appspot.com",
    messagingSenderId: "770081196719",
    appId: "1:770081196719:web:5546cc80b2f71d953c225a",
    measurementId: "G-FCW8LXB2M8"
};


//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
// export default app
export default getFirestore()

/////

export const FirebaseAuth = getAuth()

export const Authentication = () => {
    return FirebaseAuth
}

export const SignUp = (email, password) => {
    createUserWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignIn = async (email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const SignOut = async () => {
    signOut(FirebaseAuth).then(() => {
        window.location.assign('/');
    })

   

}



export const GetSignInErrorMessage = (code) => {
    switch (code) {
        case 'auth/user-not-found':
            return "Email tidak terdaftar"
        case 'wrong-password':
        default:
            return "Email atau password salah"
    }
}

export const GetSignUpErrorMessage = (code) => {
    switch (code) {
        case 'auth/email-already-in-use':
            return "Email telah terdaftar"
        case 'wrong-password':
        default:
            return "Terjadi kesalahan saat proses sign up"
    }
}

