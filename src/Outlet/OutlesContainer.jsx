import { Navbar } from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import './Outlet.css'

export const OutletContainer = () => {
  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <Navbar />
      <div className="outLet">

      <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};
