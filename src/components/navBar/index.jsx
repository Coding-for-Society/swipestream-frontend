import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./Logo";

const NavBar = (props) => {
  const authenticated = props.authenticated;

  return authenticated ? (
    <div className="navBar">
      <Logo />
      <ul className="navBarLinks">
        <li>
          <Link to="/explore">Profile</Link>
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
    <div className="navBar">
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
