import { Navbar } from "../components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import "./Outlet.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";
export const OutletContainer = () => {
  return (
    <>
      <Navbar />

      <GlobalContext>
        <div className="outLet">
          <Outlet />
        </div>
      </GlobalContext>

      <Footer></Footer>
    </>
  );
};
