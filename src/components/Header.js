import { Link } from "react-router-dom";
import heroImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            {/* <button>Reserve a Table</button> */}
            <Link to="/BookingForm">
              <button>Reserve a Table</button>
            </Link>
          </div>
          <div className="heroImg-container">
            <img src={heroImg} alt="hero image" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
