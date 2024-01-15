import brandAvatar from "../../assets/images/brand-avatar.png";
import "./MessageCard.scss";

interface MessageCardProps {
  theme: string;
  isBot: boolean;
  text: string;
  buttons: string[];
}
const MessageCard = ({
  theme,
  isBot = true,
  text,
  buttons,
}: MessageCardProps) => {
  return (
    <div
      className={`message-card__wrapper ${
        isBot ? "message-card__wrapper--bot" : "message-card__wrapper--user"
      }`}
    >
      {isBot && <img className="message-card__avatar" src={brandAvatar} />}
      <div
        className={`message-card ${
          theme == "dark" ? "message-card--dark" : "message-card--light"
        } ${
          isBot
            ? ""
            : theme == "dark"
            ? "message-card__user--dark"
            : "message-card__user--light"
        }`}
      >
        <h1
          className={`message-card__text ${
            isBot ? "" : "message-card__text--user"
          }`}
        >
          {text}
        </h1>
        {buttons.map((text) => (
          <div
            key={text}
            className={`message-card__button ${
              theme == "dark"
                ? "message-card__button--dark"
                : "message-card__button--light"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCard;
