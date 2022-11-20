import { useEffect, useState } from "react";
import "./style.css";

const VideoPlayer = (props) => {
  let active = props.active;

  const [className, setClassName] = useState("poster");

  useEffect(() => {
    if (active) {
      setClassName("video");
    } else {
      setClassName("poster");
    }
  }, [active]);
  return (
    <div className={"videoPlayer " + className}>
      {active ? (
        <video autoplay={true} controls={false}>
          <src></src>
        </video>
      ) : (
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-design-template-18133e937d93002c68b4649ea234d75f_screen.jpg?ts=1636996611"></img>
      )}
    </div>
  );
};

export default VideoPlayer;
