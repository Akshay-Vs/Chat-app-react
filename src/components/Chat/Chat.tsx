/* eslint-disable @typescript-eslint/no-explicit-any */
import ChatInfo from "./ChatInfo";
import MessageCard from "../MessageCard";
import { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import ProductCard from "../ProductCard";
import getProducts from "../../libs/getProducts";

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

const products = getProducts();

const Chat = ({ theme }: ChatProps) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [message, setMessage] = useState<any>(template);

  const handleMessages = (text: string, content: any) => {
    setMessage((prev: any) => [
      ...prev,
      {
        type: "text",
        isBot: false,
        text: text,
        buttons: [],
      },
    ]);

    if (text == "What's on sale") {
      setMessage((prev: any) => [
        ...prev,
        { type: "product", content: products.content },
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }

    if (text == "Browse products") {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "What are you looking for?",
          buttons: ["Shoes", "Shirts", "Pants"],
        },
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }

    if (text == "About Us") {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "There are many variations of passages of Lorem Ipsum available, but the majority",
          buttons: ["What's on sale"],
        },
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }

    if (text == "product") {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: `Are you sure to but ${content.name} for $${content.price}`,
          buttons: ["Yes", "No"],
        },
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }

    if (text == "Yes") {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "Thanks for shopping with us",
          buttons: [],
        },
        template[0],
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }

    if (text == "No") {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "Order cancelled",
          buttons: [],
        },
        template[0],
      ]);
      setScrollTrigger(!scrollTrigger);
      return;
    }
    setMessage((prev: any) => [
      ...prev,
      {
        type: "text",
        isBot: true,
        text: "No results found",
        buttons: [],
      },
      template[0],
    ]);
    setScrollTrigger(!scrollTrigger);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollTrigger]);

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
              products={products.content}
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
