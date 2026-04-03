import { LOGO } from "../Utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [accessBtn, setAccessBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO}></img>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              accessBtn === "login"
                ? setAccessBtn("logout")
                : setAccessBtn("login");
            }}
          >
            {accessBtn}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
