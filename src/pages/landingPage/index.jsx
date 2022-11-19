import NavBar from "../../components/navBar";
import "./style.css";
import Illustration from "./Illustration";
import Illustration2 from "./Illustration2";
import StartingButton from "./startingButton";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <h1>Your next stream is just 5 swipes away.</h1>
      <div className="startingButtonContainer">
        <Link to="/explore">
          <StartingButton className="startingButton" />
        </Link>
        <Illustration2 className="illustration2" />
        <Illustration className="illustration" />
      </div>
    </div>
  );
};

export default LandingPage;
