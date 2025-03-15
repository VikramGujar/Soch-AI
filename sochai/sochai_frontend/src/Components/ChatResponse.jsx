import React from "react";
import ReactMarkdown from "react-markdown";

export function ChatResponse({ response, darkMode, language }) {
    if (!response) {
        return (
            <div className={`chat-response p-4 mt-5 rounded shadow ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`} 
                 style={{ width: "1000px", height: "150px", maxWidth: "1200px", textAlign: "center" }}>
                <p className="fw-bold">🧠 SochAI:</p>
                <p>{language === "English" ? "🤔 I'm ready to think! Ask me anything." : "🤔 मैं सोचने के लिए तैयार हूँ! मुझसे कुछ भी पूछें।"}</p>
            </div>
        );
    }

    const { candidates = [] } = response;

    return (
        <div className="mx-5" style={{marginTop:'100px'}}>
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
                                <ReactMarkdown
                                    components={{
                                        p: ({ node, ...props }) => <p {...props} className="card-text" style={{ textAlign: "left" }} />,
                                        strong: ({ node, ...props }) => <strong {...props} style={{ fontWeight: "bold" }} />,
                                        ul: ({ node, ...props }) => <ul {...props} style={{ paddingLeft: "20px", textAlign: "left" }} />,
                                        li: ({ node, ...props }) => <li {...props} style={{ marginBottom: "5px" }} />,
                                    }}
                                >
                                    {candidate.content?.parts?.[0]?.text || "⚠️ No valid response received."}
                                </ReactMarkdown>
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
