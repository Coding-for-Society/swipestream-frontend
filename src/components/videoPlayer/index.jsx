import { useEffect, useState } from "react";
import "./style.css";

const VideoPlayer = (props) => {
  let { active, video } = props.video;

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
        <video autoPlay={true} controls={false}>
          <source></source>
        </video>
      ) : (
        <img src={video.poster_link} alt="Poster"></img>
      )}
    </div>
  );
};

export default VideoPlayer;
