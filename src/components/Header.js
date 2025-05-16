import { LOGO_URL } from "../utills/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  console.log("component Render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="Logo" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="Nav-items">
        <ul>
          <li>
            <Link className="i" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="i" to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link className="i" to={"/Contact"}>Contact Us</Link>
          </li>
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
