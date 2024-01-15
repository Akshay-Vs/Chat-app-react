import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Inputs.scss";

interface InputsInterface {
  theme: string;
}

const Inputs = ({ theme }: InputsInterface) => {
  console.log(theme);
  return (
    <div
      className={`inputs ${theme == "dark" ? "inputs--dark" : "inputs--light"}`}
    >
      <input
        type="text"
        placeholder="Type Something"
        className={`text-input ${
          theme == "dark" ? "text-input--dark" : "text-input--light"
        }`}
      />
      <div
        className={`send-button ${
          theme == "dark" ? "send-button--dark" : "send-button--light"
        }`}
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          size="lg"
          className={`send-button__icon ${
            theme == "dark"
              ? "send-button__icon--dark"
              : "send-button__icon--light"
          }`}
        />
      </div>
    </div>
  );
};

export default Inputs;
