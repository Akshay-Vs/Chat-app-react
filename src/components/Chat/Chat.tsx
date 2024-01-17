/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useRef, useState } from "react";

import ChatInfo from "./ChatInfo";
import MessageCard from "../MessageCard";
import ProductCard from "../ProductCard";
import BottomSheet from "../BottomSheet";
import PaymentSheet from "../PaymentSheet";

import message from "../../types/messageType";
import { getResponse } from "./chatConditions";
import { MessageContext } from "../../contexts/MessageContext";

import "./Chat.scss";

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
  const [price, setPrice] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<undefined | boolean>(
    undefined
  );

  const userMessage = useContext(MessageContext);

  const handleMessages = (message: message) => {
    const response = getResponse(message);
    setPrice(message.content.price || 0);
    response.showPayment && setShowPayment(true);
    setMessage((prev: any) => [
      ...prev,
      {
        type: "text",
        isBot: false,
        text: message.content.text,
        buttons: [],
      },
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

  useEffect(() => {
    setShowPayment(false);
    if (paymentStatus) {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "Thank you for shopping with us!",
          buttons: [],
        },
        template[0],
      ]);
      setScrollTrigger((prev) => !prev);
    } else if (paymentStatus === false) {
      setMessage((prev: any) => [
        ...prev,
        {
          type: "text",
          isBot: true,
          text: "Payment Failed!",
          buttons: [],
        },
        template[0],
      ]);
      setScrollTrigger((prev) => !prev);
    }
    setPaymentStatus(undefined);
  }, [paymentStatus]);

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
            image={message.image}
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
      <BottomSheet theme={theme} show={showPayment} setShow={setShowPayment}>
        <PaymentSheet
          theme={theme}
          price={price}
          paymentStatus={setPaymentStatus}
        />
      </BottomSheet>
    </div>
  );
};

export default Chat;
