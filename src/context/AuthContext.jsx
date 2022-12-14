import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'
import { Navigate} from "react-router-dom"



export async function createUser(email, password) {
    
  try {
    const userInfo = await createUserWithEmailAndPassword(auth, email, password);
    const user = userInfo.user;
    console.log(user);
    Navigate('/login');
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);
  }
};
export async function loginUser(email, password) {
    
    try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userInfo.user;
        console.log(user.email+ " has logged In");
        Navigate('/login');
    } catch (error) {
        const errorMessage = error.message;
        console.log("Error:" + errorMessage);
    }
};
