import { LOGO_URL } from "../utills/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="Logo"
          alt="Logo"
          src={LOGO_URL}
        />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;