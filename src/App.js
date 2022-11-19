import { RouterProvider } from "react-router-dom";
import VideoPage from "./pages/videoPage";
import routes from "./routes";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
