import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RequestTwoRecommendationsMock from "../../api/RequestTwoRecommendationsMock";
import VideoPlayer from "../../components/videoPlayer";
import mergePreferences from "../../functions/mergePreferences/MergePreferences";
import Arrow from "./Arrow";
import CircleIllustration from "./CircleIllustration";
import FeedBackIllustration from "./feedBackIllustration";
import "./style.css";

const defaultView = {
  left: "videoHalf",
  right: "videoHalf",
};

const VideoPage = (props) => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(false);
  const [swipes, setSwipes] = useState(5);
  const [preferences, setPreferences] = useState({
    genres: [],
    serie: 0, // Movie = 0, Series = 1
    year: 2018,
    fsk: 0,
  });
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [classNames, setClassNames] = useState(defaultView);
  const [activeVideos, setActiveVideos] = useState({
    left: {
      active: false,
      video: {
        imdb_id: 119698,
        poster_link: "",
        trailer_link: "",
        title: "Princess Mononoke",
        serie: 0,
        genres: [15, 34],
        year: 1997,
        fsk: 12,
        provider: "Netflix",
        url: "https://www.netflix.com/de/title/28630857",
      },
    },
    right: {
      active: false,
      video: {
        imdb_id: 3880990,
        poster_link: "",
        trailer_link: "",
        title: "Long March to Freedom",
        serie: 0,
        genres: [91, 40, 55, 31, 11, 281],
        year: 2011,
        fsk: 12,
        provider: "Netflix",
        url: "https://www.netflix.com/de/title/81493708",
      },
    },
  });

  const handleSwipe = (event) => {
    // Get the information of the chosen video
    let currentVideoData = {};
    if (event.target.classList.contains("leftArrow")) {
      currentVideoData = activeVideos.left.video;
    } else {
      currentVideoData = activeVideos.right.video;
    }
    // Update preferences
    let newPreferences = mergePreferences(preferences, currentVideoData);
    setPreferences(newPreferences);

    // Fetch new videos
    let recommendedVideos = RequestTwoRecommendationsMock(newPreferences);

    let newActiveVideos = {
      left: { active: false, video: recommendedVideos.first },
      right: { active: false, video: recommendedVideos.second },
    };
    // Count swipe down
    if (swipes === 1) {
      // Show results with the fetched videos
      navigate("/results", { state: recommendedVideos });
    } else {
      setSwipes(swipes - 1);
      // Feedback page
      setFeedback(true);
      // Reset the page and show two new videos
      setActiveVideos(newActiveVideos);
    }
  };

  // Tracking the mouse on the page to decide which side to open
  const handleMovingCursor = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMovingCursor);
    return () => {
      window.removeEventListener("mousemove", handleMovingCursor);
    };
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    let threshhold_left = (1 / 6) * width;
    let threshhold_right = (1 / 6) * width;

    if (classNames.left === "videoBig") {
      threshhold_left = -(1 / 16) * width;
      threshhold_right = (1 / 4) * width;
    } else if (classNames.right === "videoBig") {
      threshhold_left = (1 / 4) * width;
      threshhold_right = -(1 / 16) * width;
    }

    if (coordinates.x < width / 2 - threshhold_left) {
      // Mouse is on the left side
      setClassNames({ left: "videoBig", right: "videoSmall" });
      let newVideo = activeVideos;
      newVideo.left.active = true;
      newVideo.right.active = false;
      setActiveVideos(newVideo);
      return;
    }
    if (coordinates.x > width / 2 + threshhold_right) {
      // Mouse is on the right side
      setClassNames({ left: "videoSmall", right: "videoBig" });
      let newVideo = activeVideos;
      newVideo.left.active = false;
      newVideo.right.active = true;
      setActiveVideos(newVideo);
      return;
    }
    // Mouse is in threshhold area
    setClassNames(defaultView);
    let newVideo = activeVideos;
    newVideo.left.active = false;
    newVideo.right.active = false;
    setActiveVideos(newVideo);
    // eslint-disable-next-line
  }, [coordinates]);

  return feedback ? (
    <div className="feedbackContainer">
      <div
        className="feedbackCenter"
        onMouseEnter={() => {
          setContinue(true);
        }}
        onMouseLeave={() => {
          setContinue(false);
        }}
      >
        <FeedBackIllustration
          onClick={() => {
            setFeedback(false);
          }}
        />
        <h1 className="countDown">{swipes}</h1>
      </div>
    </div>
  ) : (
    <div className="videoContainer">
      <div className={classNames.left}>
        <div className="leftVideo">
          <Arrow
            className={
              activeVideos.left.active ? "leftArrow" : "leftArrow hidden"
            }
            onClick={handleSwipe}
          />
          <VideoPlayer video={activeVideos.left} />
        </div>
      </div>
      <div className={classNames.right}>
        <div className="rightVideo">
          <VideoPlayer video={activeVideos.right} />
          <Arrow
            className={
              activeVideos.right.active ? "rightArrow" : "rigthArrow hidden"
            }
            onClick={handleSwipe}
          />
        </div>
      </div>
      <h1 className="swipes">
        {swipes === 1
          ? "You're " + swipes + " swipe away."
          : "You're " + swipes + " swipes away."}
      </h1>
      <CircleIllustration className="circleIllustration" />
    </div>
  );
};

export default VideoPage;
