import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlankCanvasPage from "./pages/BlankCanvasPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/blank-canvas",
    element: <BlankCanvasPage />,
  },
]);
function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
