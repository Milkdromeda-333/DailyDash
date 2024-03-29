import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import { ThemeContext } from "../context/ThemeContext";

export default function Layout() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
        <div className="layout">
            
                <Navbar />
                <Outlet/>
            </div>
        </div>
    )
}