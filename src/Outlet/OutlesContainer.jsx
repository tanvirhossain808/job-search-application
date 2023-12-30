import { Navbar } from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { useEffect } from "react";

export const OutletContainer = () => {
  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
