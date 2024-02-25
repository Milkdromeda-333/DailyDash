import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { auth } from "../services/firebaseConfig";

const Context = createContext(null);

function UserContext(props) {

  const { children } = props;

  const [user, setUser] = useState(null);

  function clearUserState() {
    setUser(null);
  }

   useEffect(()=>{
      onAuthStateChanged(auth, (foundUser) => {
        if (foundUser) {
          setUser(foundUser);
        }
      });
    }, [])

    return (
        <Context.Provider value={{user, clearUserState}}>
            {children}
        </Context.Provider>
    )
}

export {  UserContext, Context };