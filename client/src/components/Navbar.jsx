import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(true);

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
                
            </ul>
            
            <span className="navbar__menuBtn" onClick={() => setIsMobileMenuHidden(prev => !prev)}>menu</span>
            
            {/* MOBILE NAVBAR */}
            <div className={`
                navbar__mobileMenu
                ${isMobileMenuHidden && "isHidden"}
                `}>

                <span className="navbar__closeBtn" onClick={() => setIsMobileMenuHidden(prev => !prev)}> close </span>
            
                <ul className="navbar__links">
                    <li>
                        <NavLink to="dashboard">dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="settings">settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}