import { useLocation } from "react-router-dom";
import ResultIllustration from "./resultIllustration";
import "./style.css";

const ResultPage = () => {
  const { state } = useLocation();
  const videos = state;

  return videos === null ? (
    <h1 className="errorMessage">I feel like you will have to swipe first!</h1>
  ) : (
    <div className="resultContainer">
      <h1 className="resultHeading">And here is your next stream!</h1>
      <ResultIllustration className="resultIllustration" />
      <div className="finalResult">
        <img
          className="resultPoster"
          src={videos.first.poster_link}
          alt="Poster"
        />
        <h1>{videos.first.title}</h1>
        <p>
          Watch it right now - on{" "}
          <a href={videos.first.url}>{videos.first.provider}</a>
        </p>
      </div>
    </div>
  );
};

export default ResultPage;
