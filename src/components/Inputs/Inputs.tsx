import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Inputs.scss";
import { useState } from "react";
import message from "../../types/messageType";

interface InputsInterface {
  theme: string;
  setMessage: (message: message) => void;
}

const Inputs = ({ theme, setMessage }: InputsInterface) => {
  const [text, setText] = useState<string>("");

  const handleSendText = () => {
    if (text == "") return;
    setMessage({ type: "text", content: { text: text, isBot: false } });
    setText("");
  };
  return (
    <div
      className={`inputs ${theme == "dark" ? "inputs--dark" : "inputs--light"}`}
    >
      <input
        type="text"
        placeholder="Type Something"
        className={`text-input ${
          theme == "dark" ? "text-input--dark" : "text-input--light"
        }`}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendText()}
      />
      <div
        className={`send-button ${
          theme == "dark" ? "send-button--dark" : "send-button--light"
        }`}
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="lg"
          className={`send-button__icon ${
            theme == "dark"
              ? "send-button__icon--dark"
              : "send-button__icon--light"
          }`}
          onClick={handleSendText}
        />
      </div>
    </div>
  );
};

export default Inputs;
