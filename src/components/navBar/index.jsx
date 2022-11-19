import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./Logo";

const NavBar = (props) => {
  const authenticated = props.authenticated;

  return authenticated ? (
    <div>
      <Logo />
      <ul className="navBar">
        <li>
          <Link to="/explore">Explore Streams</Link>
        </li>
        <li>
          <Link>Your watchlist</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  ) : (
    <div className="navBar">
      <Logo className="logo" />
      <ul className="navBarLinks">
        <li>
          <Link to="/explore">Explore Streams</Link>
        </li>
        <li>
          <Link>About us</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
