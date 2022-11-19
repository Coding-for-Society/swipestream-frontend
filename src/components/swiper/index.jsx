import { useState } from "react";
import "./style.css";
const defaultView = {
  left: "leftVideo videoHalf",
  right: "rightVideo videoHalf",
};

const Swiper = (props) => {
  const [classNames, setClassNames] = useState(defaultView);

  return (
    <ul className="videoContainer">
      <li>
        <div
          className={classNames.left}
          onMouseEnter={() => {
            setClassNames({
              left: "leftVideo videoBig",
              right: "rightVideo videoSmall",
            });
          }}
          onMouseLeave={() => {
            setClassNames(defaultView);
          }}
        >
          <p>Left</p>
        </div>
      </li>
      <li>
        <div
          className={classNames.right}
          onMouseEnter={() => {
            setClassNames({
              left: "leftVideo videoSmall",
              right: "rightVideo videoBig",
            });
          }}
          onMouseLeave={() => {
            setClassNames(defaultView);
          }}
        >
          <p>Right</p>
        </div>
      </li>
    </ul>
  );
};

export default Swiper;
