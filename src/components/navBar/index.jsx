import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Logo from "./Logo";
import { useEffect, useState } from "react";

const NavBar = (props) => {
  const authenticated = props.authenticated;
  const location = useLocation();

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (location.pathname === "/about") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [location.pathname]);

  return authenticated ? (
    <div className={"navBar " + theme}>
      <Logo />
      <ul className="navBarLinks">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className={"navBar " + theme}>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <ul className="navBarLinks">
        <li>
          <Link to="/explore">Explore Streams</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
