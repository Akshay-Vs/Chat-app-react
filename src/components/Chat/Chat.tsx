import ChatInfo from "./ChatInfo";
import "./Chat.scss";

interface ChatProps {
  theme: string;
}

const Chat = ({ theme }: ChatProps) => {
  return <div>{theme}</div>;
};

export default Chat;
