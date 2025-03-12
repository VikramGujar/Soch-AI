import { ChatInput } from "./Components/ChatInput";
import { ChatResponse } from "./Components/ChatResponse";



function App() {
  return (
    <div className="App">
      <header className="bg-primary py-4 text-white text-center ">
        <h1>SochAI</h1>
      </header>

      <ChatInput />
      <ChatResponse />

    </div>
  );
}

export default App;
