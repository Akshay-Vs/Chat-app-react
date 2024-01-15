import ChatInfo from "./ChatInfo";
import "./Chat.scss";
import MessageCard from "../MessageCard";

interface ChatProps {
  theme: string;
}

const Chat = ({ theme }: ChatProps) => {
  const buttons = ["Browse products", "What's on sale", "About Us"];
  return (
    <div className="chat">
      <ChatInfo theme={theme} />
      <MessageCard
        theme={theme}
        isBot={true}
        buttons={buttons}
        text="Hey there, Welcome to our store. How can we help you?"
      />
      <MessageCard
        theme={theme}
        isBot={false}
        buttons={[]}
        text="Browse products"
      />
    </div>
  );
};

export default Chat;
