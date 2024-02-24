import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

const auth = getAuth();

/* 
* Creates a new account for app on firebase
* @param object Contains username and password to use to register
* @return object  User object 
*/
async function signUpLocally({ email, password }) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Signed up a new user:")
            console.log(userCredential)
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            console.log("AUTHENTICATION ERROR: ", error);
        });
}

/* 
* Logs in user
* @param object Contains username and password to use to log in
* @return object  User object 
*/
async function logInLocally({ email, password }) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
            console.log("AUTHENTICATION ERROR: ", error);
        });
}

export { signUpLocally, logInLocally };