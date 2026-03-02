import { LOGO } from "../Utils/Constants";

const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Header;
