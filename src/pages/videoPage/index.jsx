import { useEffect, useState } from "react";
import VideoPlayer from "../../components/videoPlayer";
import CircleIllustration from "./CircleIllustration";
import MiddleIllustration from "./middleIllustration";
import "./style.css";

const defaultView = {
  left: "videoHalf",
  right: "videoHalf",
};

const VideoPage = (props) => {
  const [classNames, setClassNames] = useState(defaultView);

  const [leftVideo, setLeftVideo] = useState(false);
  const [rightVideo, setRightVideo] = useState(false);

  useEffect(() => {
    console.log(leftVideo);
  }, [leftVideo]);

  return (
    <div className="videoContainer">
      <div className="videoTreshhold"></div>
      <div
        className={classNames.left}
        onMouseEnter={() => {
          setClassNames({
            left: "videoBig",
            right: "videoSmall",
          });
          setLeftVideo(true);
        }}
        onMouseLeave={() => {
          setClassNames(defaultView);
          setLeftVideo(false);
        }}
      >
        <div className="leftVideo">
          <VideoPlayer active={leftVideo} />
        </div>
      </div>
      <div
        className={classNames.right}
        onMouseEnter={() => {
          setClassNames({
            left: "videoSmall",
            right: "videoBig",
          });
          setRightVideo(true);
        }}
        onMouseLeave={() => {
          setClassNames(defaultView);
          setRightVideo(false);
        }}
      >
        <div className="rightVideo">
          <VideoPlayer active={rightVideo} />
        </div>
      </div>
      <CircleIllustration className="circleIllustration" />
      <MiddleIllustration className="middleIllustration" />
    </div>
  );
};

export default VideoPage;
