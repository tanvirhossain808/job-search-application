import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
  const [showMenue, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <ul>
          <span className="logoFeild">
            <li className="logo">
              <img src={logo} alt="" />
            </li>
          </span>
          <span className={`navLInksBtn ${showMenue ? "showNav" : ""}`}>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>

            <li>
              <NavLink to="jobs">JOBS</NavLink>
            </li>
            <li>
              <NavLink to="abouts">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="favorite">FAVORITE</NavLink>
            </li>
            <li>
              <NavLink to="signup">SIGN UP</NavLink>
            </li>
            <li>
              <NavLink to="SIGNIN">SIGNIN</NavLink>
            </li>
            <li>
              <NavLink to="SIGNOUT">SIGN OUT</NavLink>
            </li>
            {showMenue ? (
              <li className="menuShowBtn" onClick={() => setShowMenu(false)}>
                <IoCloseSharp />
              </li>
            ) : (
              ""
            )}
          </span>
          <span className="menubar menuShowBtn">
            <li style={{ color: "black" }} onClick={() => setShowMenu(true)}>
              <MdMenuOpen />
            </li>
          </span>
        </ul>
      </nav>
    </>
  );
};
