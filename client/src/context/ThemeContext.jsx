import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "plain-day");

    const themes = [
        'plain-day',
        'plain-night',
        'mint-mystic'
    ]

    function changeTheme(newTheme) {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        document
            .documentElement
            .setAttribute("data-theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, themes, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };