import { useState } from "react";
import logo from "../images/Logo.svg";
import burgerIcon from "../images/hamburger-icon.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`nav-container ${isOpen ? "open" : ""}`}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        {/* Mobile */}
        <div className="burger-icon">
          <img src={burgerIcon} alt="burger-icon" onClick={toggleMenu} />
        </div>

        <ul className={`nav-ul ${isOpen ? "mobile" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
