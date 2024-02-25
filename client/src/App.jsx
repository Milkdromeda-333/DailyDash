import { useContext } from "react";
import {
  
} from "react-router-dom";
import { Context as UserContext } from "./context/UserContext";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";


function App() {
  const { user } = useContext(UserContext);
  
  return (
    <div className='app'>
      {user ? <Dashboard /> : <Auth />}
    </div>
  )
}

export default App
