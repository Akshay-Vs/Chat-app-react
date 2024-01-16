import brandAvatar from "../../assets/images/brand-avatar.png";
import "./MessageCard.scss";

interface Content {
  text: string;
}

interface MessageCardProps {
  theme: string;
  isBot: boolean;
  text: string;
  buttons: string[];
  handleMessage: (text: string, content: Content) => void;
}
const MessageCard = ({
  theme,
  isBot = true,
  text,
  buttons,
  handleMessage,
}: MessageCardProps) => {
  return (
    <div
      className={`message-card__wrapper ${
        isBot
          ? "message-card__wrapper--bot"
          : "message-card__wrapper--user fadeIn"
      }`}
    >
      {isBot && (
        <img
          className="message-card__avatar"
          src={brandAvatar}
          alt="brand avatar"
        />
      )}
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
            onClick={() => handleMessage(text, { text })}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageCard;
