import { useState } from "react";
import { ChatInput } from "./Components/ChatInput";
import { ChatResponse } from "./Components/ChatResponse";
import { fetchChatResponse } from "./Services/api";
import { Header } from "./Components/Header";
import { AppContext } from "./Components/useAppContext"; // Import Context

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [user, setUser] = useState(null);

  const toggleTheme = () => setDarkMode(!darkMode);
  const changeLanguage = (lang) => setLanguage(lang);
  const updateUser = (newUser) => setUser(newUser);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("🚨 Oops! Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ darkMode, language, user, toggleTheme, changeLanguage, updateUser }}>
      <div className={`App text-center p-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          {loading ? (
            <p className="text-warning">🤖 {language === "English" ? "Thinking... Give me a moment!" : "सोच रहा हूँ... थोड़ा रुकिए!"} ⏳</p>
          ) : (
            <ChatResponse response={response} darkMode={darkMode} language={language} />
          )}
        </div>
        <ChatInput onSubmit={handleQuestionSubmit} darkMode={darkMode} language={language} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
