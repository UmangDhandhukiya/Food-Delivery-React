import { LOGO_URL } from "../utills/constants";
import { useState } from "react";
import { Link } from "react-router";
import useStatus from "../utills/useStatus";

const Header = () => {
  const [Login, setLogin] = useState("Login");
  console.log("component Render");

  const onlineStatus = useStatus();

  return (
    <div className="flex justify-between items-center border border-black">
      <div>
        <img className="size-24" alt="Logo" src={LOGO_URL} />
      </div>
      <div className="w-1/2 text-lg font-medium">
        <ul className="flex justify-between">
          <li className="py-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

          <Link
            className="py-2 active:text-orange-600 active:underline cursor-pointer"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="py-2 active:text-orange-600 active:underline cursor-pointer"
            to={"/about"}
          >
            About Us
          </Link>
          <Link
            className="py-2 active:text-orange-600 active:underline cursor-pointer"
            to={"/Contact"}
          >
            Contact Us
          </Link>
          <button
            className="px-5 py-2 text-white bg-orange-600 rounded-3xl"
            onClick={() => {
              Login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {Login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
