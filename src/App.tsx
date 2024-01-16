import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.scss";
import Chat from "./components/Chat";
import Inputs from "./components/Inputs/Inputs";
import { MessageContext } from "./contexts/MessageContext";
import message from "./types/messageType";

const App = () => {
  const [theme, setTheme] = useState<string>("light");
  const [message, setMessage] = useState<message>();

  return (
    <MessageContext.Provider value={message}>
    <div className={`app ${theme == "dark" ? "app--dark" : "app--light"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Chat theme={theme}/>
      <Inputs theme={theme} setMessage={setMessage}/>
    </div>
    </MessageContext.Provider>
  );
};

export default App;
