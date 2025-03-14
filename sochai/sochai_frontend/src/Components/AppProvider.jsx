import { useState, createContext, useContext } from "react";


export function AppProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("English");
    const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
  
    const toggleTheme = () => setDarkMode(!darkMode);
    const changeLanguage = (lang) => setLanguage(lang);
    const updateUser = (userData) => setUser(userData);
  
    return (
      <AppContext.Provider value={{ darkMode, language, user, toggleTheme, changeLanguage, updateUser }}>
        <div className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}>
          {children}
        </div>
      </AppContext.Provider>
    );
  }
  