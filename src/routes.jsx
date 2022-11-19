import { createBrowserRouter, Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "explore",
    element: <></>,
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
