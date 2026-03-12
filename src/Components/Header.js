import { LOGO } from "../Utils/Constants";
import { useState } from "react";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
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
