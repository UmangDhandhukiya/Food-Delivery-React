import { LOGO_URL } from "../utills/constants";
import { useState } from "react";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  console.log("component Render")

  return (
    <div className="header">
      <div className="logo-container">
        <img className="Logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              Login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
            className="Login"
          >
            {Login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
