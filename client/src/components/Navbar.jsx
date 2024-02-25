import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context as UserContext } from "../context/UserContext";
import AuthService from "../services/authService";

export default function Navbar() {

    const { user, clearUserState} = useContext(UserContext);
    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

    function signOut() {
        clearUserState();
        AuthService.logOut()
    }

    return (
        <nav>
            <span className="navbar__header">DailyDash</span>

            <ul className="navbar__wide-screen-links">
                <li>
                    <NavLink to="dashboard">dashboard</NavLink>
                </li>
                
                <li>
                    <NavLink to="goals">goals</NavLink>
                </li>

                <li>
                        <NavLink to="settings">settings</NavLink>
                </li>

                <li onClick={signOut}>Logout</li>

                
            </ul>
            
            <span className="navbar__menuBtn" onClick={() => setIsMobileMenuHidden(prev => !prev)}>menu</span>
            
            {/* MOBILE NAVBAR */}
            <div className={`
                navbar__mobileMenu
                ${isMobileMenuHidden && "isHidden"}
                `}>

                {user && (<><span className="navbar__closeBtn" onClick={() => setIsMobileMenuHidden(prev => !prev)}> close </span>
            
                <ul className="navbar__links">
                    <li>
                        <NavLink to="dashboard">dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="settings">settings</NavLink>
                    </li>
                    
                        <li onClick={signOut}>Logout</li>
                </ul></>)}
            </div>
        </nav>
    )
}