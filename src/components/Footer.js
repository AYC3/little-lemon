import Logo from "../images/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-container">
          <div>
            <img src={Logo} alt="logo" />
            <p>
              <i>
                {" "}
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </i>
            </p>
          </div>
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
              <li>
                Address: <br /> 12345 San Francisco, USA
              </li>
              <li>
                Phone Number: <br /> 01234 567 889
              </li>
              <li>
                Email: <br /> little-lemon@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
