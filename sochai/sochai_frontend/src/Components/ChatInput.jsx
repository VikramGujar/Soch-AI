import { useState } from "react";

export function ChatInput({ onSubmit, darkMode, language }) {
    const [question, setQuestion] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!question.trim()) {
            alert("⚠️ " + (language === "English" ? "Please enter a question!" : "कृपया एक प्रश्न दर्ज करें!"));
            return;
        }
        onSubmit(question.trim());
        setQuestion("");
    }

    function handleInputChange(e) {
        setQuestion(e.target.value);
    }

    return (
        <div className={`container my-4 p-3 rounded ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h2 className="p-5">
                    <label className="fw-bold">
                        {language === "English" ? "💡 You Just ASK, We Will Think! 🧠" : "💡 आप पूछें, हम सोचेंगे! 🧠"}
                    </label>
                    </h2>
                    <input
                        id="chat"
                        type="text"
                        className="form-control mt-2 p-5 chatinput"
                        placeholder={language === "English" ? "🤔 Why are you thinking? Just ASK!" : "🤔 आप क्यों सोच रहे हैं? बस पूछें!"}
                        value={question}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                        style={{ 
                            background: darkMode ? "#333" : "#fff", 
                            color: darkMode ? "#fff" : "#000", 
                            border: "none", 
                            outline: "none",
                            
                        }}
                        autoFocus
                    />
                </div>
                <button 
                    type="submit" 
                    className={`btn mt-3  ${darkMode ? "btn-warning" : "btn-dark"}`} 
                    style={{ fontWeight: "bold" }}
                >
                     {language === "English" ? "Submit" : "जमा करें"}
                     <span className="mx-2"><i class="bi bi-arrow-up-right-circle-fill"></i></span>
                </button>
            </form>
        </div>
    );
}
