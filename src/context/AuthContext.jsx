import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'
import { Navigate} from "react-router-dom"



export function createUser  (email, password) {
    
      return createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
        // Signed in 
        const user = userInfo.user;
        console.log(user)
        Navigate('/login')
      })
      .catch((error) => {
        const errorMessage = error.message;
     console.log("Error:"+errorMessage)
      });
};
