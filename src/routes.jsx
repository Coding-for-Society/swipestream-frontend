import {
  RouterProvider,
  Navigate,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import VideoPage from "./pages/videoPage";
import LandingPage from "./pages/landingPage";
import NavBar from "./components/navBar";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "",
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
      ],
    },
    { path: "*", element: <Navigate replace to="/" /> },
  ]);

  return <RouterProvider router={routes} />;
};

export default Routes;
