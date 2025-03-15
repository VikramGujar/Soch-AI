import { useState } from "react";
import { ChatInput } from "./Components/ChatInput";
import { ChatResponse } from "./Components/ChatResponse";
import { fetchChatResponse } from "./Services/api";
import { Header } from "./Components/Header";
import { AppContext } from "./Components/useAppContext"; 
import './Style/styles.css';

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
      const apiResponse = await fetchChatResponse("Explain ["+question+"] in a simple, easy-to-understand way. Break down complex ideas into smaller parts, use everyday language, and provide examples or analogies if helpful. Assume I have no prior knowledge of the topic and make sure the response is clear, concise, and beginner-friendly.");
      setResponse(apiResponse);
    } catch (error) {
      alert("🚨 Oops! Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{ darkMode, language, user, toggleTheme, changeLanguage, updateUser }}>
      <div className={`App text-center p-4 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`} style={{ width:'100vw',minHeight:'100vh', display: "flex", flexDirection: "column" }}>
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
