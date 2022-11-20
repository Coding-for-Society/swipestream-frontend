import { useEffect, useState } from "react";
import "./style.css";
import video1 from "./video.mp4";

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
        <video width="700px" autoPlay={true} controls={false} loop={true}>
          <source src={video1} type="video/mp4"></source>
        </video>
      ) : (
        <img src={video.poster_link} alt="Poster"></img>
      )}
    </div>
  );
};

export default VideoPlayer;
