import { useContext } from "react";
import {
  
} from "react-router-dom";
import { Context as UserContext } from "./context/UserContext";
// import { ThemeContext } from "./context/ThemeContext";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";


function App() {
  const { user } = useContext(UserContext);
  // const { theme } = useContext(ThemeContext);
  
  return (
    <div>
      {user ? <Dashboard /> : <Auth />}
    </div>
  )
}

export default App
