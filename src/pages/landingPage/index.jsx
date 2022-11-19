import NavBar from "../../components/navBar";
import "./style.css";
import Illustration from "./Illustration";
import Illustration2 from "./Illustration2";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <NavBar authenticated={false} />
      <h1>Your next stream is just 5 swipes away.</h1>
      <Illustration2 className="illustration2" />
      <Illustration className="illustration" />
    </div>
  );
};

export default LandingPage;
