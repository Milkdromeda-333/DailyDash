import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

let instance;
class AuthService {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        instance = this;
        this.auth = getAuth();
    }

    /* 
    * Creates a new account for app on firebase
    * @param object Contains username and password to use to register
    * @return object  User object 
    */
   async  signUpLocally({ email, password }) {
        return createUserWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log("Signed up a new user:");
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
    /*
    * Logs in user
    * @param object Contains username and password to use to log in
    * @return object  User object 
    */
    async logInLocally({ email, password }) {
        return signInWithEmailAndPassword(this.auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
                const user = userCredential.user;
                return user;
            })
            .catch((error) => {
                console.log("AUTHENTICATION ERROR: ", error);
            });
    }
    /* 
    * Logs out user
    */
    logOut() {
        signOut(this.auth).catch((error) => {
            console.log("LOG OUT ERROR: ", error);
        });
    }
}
const authService = Object.freeze(new AuthService());
export default authService;

// const auth = getAuth();

// /*
// * Creates a new account for app on firebase
// * @param object Contains username and password to use to register
// * @return object  User object
// */
// async function signUpLocally({ email, password }) {
//     return createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log("Signed up a new user:")
//             console.log(userCredential)
//             const user = userCredential.user;
//             return user;
//         })
//         .catch((error) => {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // ..
//             console.log("AUTHENTICATION ERROR: ", error);
//         });
// }

// /*
// * Logs in user
// * @param object Contains username and password to use to log in
// * @return object  User object
// */
// async function logInLocally({ email, password }) {
//     return signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             console.log(userCredential);
//             const user = userCredential.user;
//             return user;
//         })
//         .catch((error) => {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // ..
//             console.log("AUTHENTICATION ERROR: ", error);
//         });
// }

// /*
// * Logs out user
// */
// function logOut() {
//     const auth = getAuth();
//     signOut(auth).catch((error) => {
//         console.log("LOG OUT ERROR: ", error);
//     });
// }



// export { signUpLocally, logInLocally, logOut, AuthService };
