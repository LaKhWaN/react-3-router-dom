import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export const Nav = () => {
  const { username } = useContext(AppContext);
  return (
    <div className="navbar">
      <Link className="navbar_ele" to="/">
        Home
      </Link>
      <Link className="navbar_ele" to="/contact">
        Contact
      </Link>
      <Link className="navbar_ele" to="/about">
        About
      </Link>
      <Link className="navbar_ele" to="/profile">
        {username}
      </Link>
    </div>
  );
};
