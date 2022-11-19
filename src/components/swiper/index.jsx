import { useState } from "react";
import "./style.css";
const defaultView = {
  left: "videoHalf",
  right: "videoHalf",
};

const Swiper = (props) => {
  const [classNames, setClassNames] = useState(defaultView);

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
        }}
        onMouseLeave={() => {
          setClassNames(defaultView);
        }}
      >
        <div className="leftVideo"></div>
      </div>
      <div
        className={classNames.right}
        onMouseEnter={() => {
          setClassNames({
            left: "videoSmall",
            right: "videoBig",
          });
        }}
        onMouseLeave={() => {
          setClassNames(defaultView);
        }}
      >
        <div className="rightVideo"></div>
      </div>
    </div>
  );
};

export default Swiper;
