import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {set, ref } from "firebase/database";
import { database } from "../firebaseConfig";


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
            })
            // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
onAuthStateChanged(auth, (user) => {
    if (user) {
        uid = user.uid
    } else {
        //The user is signed out.
    }
})