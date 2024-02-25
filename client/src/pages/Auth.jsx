import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
// import { signUpLocally, logInLocally } from "../services/authService";
import AuthService from "../services/authService";


export default function Auth() {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRegistering, setIsRegistering] = useState(true);

    function handleAuth(event) {
        event.preventDefault();
        if (isRegistering) {
            AuthService.signUpLocally(credentials);
        } else {
           AuthService.logInLocally(credentials);
        }
    }

    return (
        <div className="">
            <form>
                <label htmlFor="email">
                    Email:
                     <input
                        type="text" 
                        name="email" 
                        value={credentials.email} 
                        onChange={(event) => setCredentials(prev => ({ ...prev, email: event.target.value }))}
                     />
                </label>
               
               <label htmlFor="password">
                    Password: 
                    <input 
                        type={isPasswordVisible ? "text": "password"} 
                        id="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={(event) => setCredentials(prev => ({ ...prev, password: event.target.value }))} 
                    />
                    
                     {isPasswordVisible ?
                        <VscEye onClick={()=>setIsPasswordVisible(prev => !prev)} />
                        : <VscEyeClosed onClick={()=>setIsPasswordVisible(prev => !prev)} />
                    }
                </label> 
                <button onClick={handleAuth}>{isRegistering ? "register" : "log in"}</button>

                <button type="button"
                    onClick={() => setIsRegistering(prev => !prev)}>
                    {isRegistering ?"log in to existing account" : "create a new account" }
                </button>
                
            </form>
        </div>
    )
}