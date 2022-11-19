import teamConfig from "./teamConfig";
import "./style.css";

const AboutPage = () => {
  const team = teamConfig;

  return (
    <div className="aboutPage">
      <div className="aboutTextContainer">
        <h1>About us</h1>
        <p>
          This application was conceptiualized within the frameworks of HackaTUM
          2022. <br />
          We are a group of enthusiastic students who take up the Hubert-Burda
          Meda challenge to provide you with the best streaming experience you
          really deserve.
        </p>
        <h2>In the Spotlight</h2>
      </div>
      <div className="teamCenterContainer">
        <div className="teamContainer">
          {teamConfig.map((member) => (
            <div className="teamMemberEntry">
              <img src={member.picture} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.studies}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
