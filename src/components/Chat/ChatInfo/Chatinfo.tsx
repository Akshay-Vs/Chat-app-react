import brandAvatar from "../../../assets/images/brand-avatar.png";
import "./ChatInfo.scss";
interface ChatinfoProps {
  theme: string;
}

const Chatinfo = ({ theme }: ChatinfoProps) => {
  return (
    <div
      className={`chat-info ${theme == "dark" ? "chat--dark" : "chat--light"}`}
    >
      <img className="chat-avatar" src={brandAvatar} />
      <div className="chat-name">Chat Name</div>
      <div className="chat-description">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form
      </div>
    </div>
  );
};

export default Chatinfo;
