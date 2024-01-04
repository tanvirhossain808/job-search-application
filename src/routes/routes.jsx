import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import App from "../App";
import { Contact } from "../pages/Contact/Contact";
import { Jobs } from "../pages/Jobs/Jobs";
import { About } from "../pages/About/About";
import { SignUp } from "../pages/SignUp/SignUp";
import { AddNewJob } from "../pages/AddNewJob/AddNewJob";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { FavouriteJobs } from "../pages/FavouriteJobs/FavouriteJobs";
import { ParticularJobPageInfo } from "../pages/ParticularJobaInfo/ParticularJobInfo";
import { NotFound } from "../pages/NotFound/NotFound";

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
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "jobs/:id",
        element: <ParticularJobPageInfo></ParticularJobPageInfo>,
      },
      {
        path: "abouts",
        element: <About></About>,
      },
      {
        path: "favorite",
        element: <FavouriteJobs></FavouriteJobs>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "addNewJob",
        element: <AddNewJob></AddNewJob>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
