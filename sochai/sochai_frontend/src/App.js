import { useState } from "react";
import { ChatInput } from "./Components/ChatInput";
import { ChatResponse } from "./Components/ChatResponse";



function App() {

  const [response, setResponse] = useState(null);
  const [loding, setLoding] = useState(false);

  const handleQuestionSubmit = async (question) => 
  {
    setLoding(true);
    setResponse(null)

    try {
      
    } catch (error) 
    {
      alert("Failed to get response");  
    }finally
    {
      setLoding(false);
    }
  }
  

  return (
    <div className="App">
      <header className="bg-primary py-4 text-white text-center ">
        <h1>SochAI</h1>
      </header>

      <ChatInput onSubmit={handleQuestionSubmit}/>
      <ChatResponse response={response} />

    </div>
  );
}

export default App;
