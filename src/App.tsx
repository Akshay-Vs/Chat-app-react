import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.scss";
import Chat from "./components/Chat";
import Inputs from "./components/Inputs/Inputs";

const App = () => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <div className={`app ${theme == "dark" ? "app--dark" : "app--light"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Chat theme={theme} />
      <Inputs theme={theme}/>
    </div>
  );
};

export default App;
