import Logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <section>
          <img src={Logo} alt="logo" />
          <div>
            <h3>Doormat Navigation</h3>
            <ul>
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
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>xxxxx</li>
            </ul>
          </div>

          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li>cccccc</li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
