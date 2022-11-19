import { createBrowserRouter, Navigate } from "react-router-dom";
import VideoPage from "./pages/videoPage";
import LandingPage from "./pages/landingPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "explore",
    element: <VideoPage />,
  },
  {
    path: "login",
    element: <></>,
  },
  {
    path: "logout",
    element: <></>,
  },
  {
    path: "friends",
    element: <></>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default routes;
