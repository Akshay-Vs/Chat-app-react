/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatInfo from "./ChatInfo";
import MessageCard from "../MessageCard";
import { useContext, useEffect, useRef, useState } from "react";
import "./Chat.scss";
import ProductCard from "../ProductCard";
import { MessageContext } from "../../contexts/MessageContext";
import message from "../../types/messageType";
import { getResponse } from "./chatConditions";

interface ChatProps {
  theme: string;
}

const template = [
  {
    type: "text",
    isBot: true,
    text: "Hey there, Welcome to our store. How can we help you?",
    buttons: ["Browse products", "What's on sale", "About Us"],
  },
];

const Chat = ({ theme }: ChatProps) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [message, setMessage] = useState<any>(template);
  const userMessage = useContext(MessageContext);

  const handleMessages = (message: message) => {
    const response = getResponse(message);
    setMessage((prev: any) => [
      ...prev,
      response,
      response.showTemplate && template[0],
    ]);
    setScrollTrigger((prev) => !prev);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollTrigger]);

  useEffect(() => {
    if (userMessage) {
      setMessage((prev: any) => [
        ...prev,
        {
          type: userMessage.type,
          isBot: userMessage.content.isBot,
          text: userMessage.content.text,
          buttons: [],
        },
      ]);
    }
    setScrollTrigger((prev) => !prev);
  }, [userMessage]);

  return (
    <div className="chat">
      <ChatInfo theme={theme} />
      {message.map((message: any, index: number) =>
        message.type == "text" ? (
          <MessageCard
            key={message.id || index}
            theme={theme}
            isBot={message.isBot}
            text={message.text}
            buttons={message.buttons}
            handleMessage={handleMessages}
          />
        ) : message.type == "product" ? (
          <div className="horiz-scroll">
            <ProductCard
              key={message.id || index}
              theme={theme}
              handleMessage={handleMessages}
            />
          </div>
        ) : (
          ""
        )
      )}

      <div ref={endRef} />
    </div>
  );
};

export default Chat;
