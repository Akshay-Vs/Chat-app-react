import ChatInfo from "./ChatInfo";
import "./Chat.scss";

interface ChatProps {
  theme: string;
}

const Chat = ({ theme }: ChatProps) => {
  return (
    <div className="chat">
      <ChatInfo theme={theme} />
      <ChatInfo theme={theme} />
      <ChatInfo theme={theme} />
      <ChatInfo theme={theme} />
      <ChatInfo theme={theme} />
      <ChatInfo theme={theme} />      
      <ChatInfo theme={theme} />
    </div>
  );
};

export default Chat;
