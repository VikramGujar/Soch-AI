export function ChatResponse({ response, darkMode, language }) {
    if (!response) {
        return (
            <div className={`chat-response p-4 rounded shadow ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} 
                 style={{ maxWidth: "600px", textAlign: "left" }}>
                <p className="fw-bold">🧠 SochAI:</p>
                <p>{language === "English" ? "🤔 I'm ready to think! Ask me anything." : "🤔 मैं सोचने के लिए तैयार हूँ! मुझसे कुछ भी पूछें।"}</p>
            </div>
        );
    }

    const { candidates = [] } = response;

    return (
        <div>
            <h1 className={`text-${darkMode ? "light" : "dark"} mb-3`}>
                💡 {language === "English" ? "Your Answer" : "आपका उत्तर"}
            </h1>

            <div>
                {candidates.length > 0 ? (
                    candidates.map((candidate, index) => (
                        <div 
                            className="card mb-3 shadow-sm" 
                            key={index} 
                            style={{ background: darkMode ? "#1c1c1c" : "#fff", color: darkMode ? "#fff" : "#000" }}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    {candidate.content?.parts?.[0]?.text || "⚠️ No valid response received."}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-warning">
                        {language === "English" ? "⚠️ No response received!" : "⚠️ कोई उत्तर नहीं मिला!"}
                    </p>
                )}
            </div>
        </div>
    );
}
