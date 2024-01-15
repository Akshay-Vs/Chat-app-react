import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import brandAvatar from "../../assets/images/brand-avatar.png";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {
  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  return (
    <nav className={`${theme == "dark" ? "nav--dark" : "nav--light"}`}>
      <div className="brand-info">
        <img className="avatar" src={brandAvatar} />
        <h1 className="company-name">Chat Name</h1>
      </div>

      {theme == "dark" ? (
        <FontAwesomeIcon
          icon={faSun}
          className="theme-button"
          size="lg"
          onClick={toggleTheme}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMoon}
          className="theme-button"
          size="lg"
          onClick={toggleTheme}
        />
      )}
    </nav>
  );
};

export default Navbar;
