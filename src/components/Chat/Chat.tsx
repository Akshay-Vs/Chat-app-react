import ChatInfo from "./ChatInfo";
import MessageCard from "../MessageCard";
import { useEffect, useRef, useState } from "react";
import "./Chat.scss";

interface ChatProps {
  theme: string;
}

const template = [
  {
    type: "card",
    isBot: true,
    text: "Hey there, Welcome to our store. How can we help you?",
    buttons: ["Browse products", "What's on sale", "About Us"],
  },
];

const Chat = ({ theme }: ChatProps) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger] = useState(false);
  const [message, setMessage] = useState(template);

  const handleMessages = (text: string) => {
    setMessage((prev) => [
      ...prev,
      {
        type: "card",
        isBot: false,
        text: text,
        buttons: [],
      },
    ]);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollTrigger]);

  return (
    <div className="chat">
      <ChatInfo theme={theme} />
      {message.map((message) =>
        message.type == "card" ? (
          <MessageCard
            key={message.text}
            theme={theme}
            isBot={message.isBot}
            text={message.text}
            buttons={message.buttons}
            handleMessage={handleMessages}
          />
        ) : (
          ""
        )
      )}
      <div ref={endRef} />
    </div>
  );
};

export default Chat;
