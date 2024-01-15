import ChatInfo from "./ChatInfo";
import MessageCard from "../MessageCard";
import { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import ProductCard from "../ProductCard";

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

const products = {
  type: "product",
  content: [
    {
      name: "Product Name",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 100,
      image:
        "https://img.freepik.com/premium-photo/product-photography-shoe_981061-349.jpg",
      url: "https://www.google.com",
    },

    {
      name: "Product Name",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 100,
      image:
        "https://img.freepik.com/premium-photo/neon-light-sneakers-trendy-stylish-way-make-statement-they-are-perfect-parties-clubs_1030265-411.jpg",
      url: "https://www.google.com",
    },
    {
      name: "Product Name",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_6l9nFoc5wbrHFyftATOUZ1_Qsa15pAX2njL1pokATjR9kfEh3OkLcyCpeSjRv3mXKQ&usqp=CAU",
      url: "https://www.google.com",
    },
    {
      type: "product",
      name: "Product Name",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 100,
      image:
        "https://img.freepik.com/premium-photo/neon-shoe-with-glowing-sole-is-lit-up-neon-light_635062-353.jpg",
      url: "https://www.google.com",
    },
  ],
};

const Chat = ({ theme }: ChatProps) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [scrollTrigger, setScrollTrigger] = useState(false);
  const [message, setMessage] = useState<any>(template);

  const handleMessages = (text: string) => {
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
      {message.map((message: any) =>
        message.type == "text" ? (
          <MessageCard
            key={message.text}
            theme={theme}
            isBot={message.isBot}
            text={message.text}
            buttons={message.buttons}
            handleMessage={handleMessages}
          />
        ) : message.type == "product" ? (
          <div className="horiz-scroll">
            <ProductCard theme={theme} products={products.content} />
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
