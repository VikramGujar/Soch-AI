import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true); // Default: Dark Mode
  const [language, setLanguage] = useState("English"); // Default: English

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "English" ? "Hindi" : "English"));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}
