import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import App from "../App";
import { Contact } from "../pages/Contact/Contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
