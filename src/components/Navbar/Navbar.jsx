import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const navigate = useNavigate();
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
              <NavLink to="appliedJob">Applied</NavLink>
            </li>
            <li>
              <NavLink to="addNewJob">POST</NavLink>
            </li>
            <li>
              <NavLink to="favorite">FAVORITE</NavLink>
            </li>
            <li>
              {user ? (
                <span className="userAvater">
                  <img src={user.photoURL} alt="" />
                </span>
              ) : (
                <NavLink to="signup">SIGN UP</NavLink>
              )}
            </li>
            {user ? (
              <li
                onClick={() => {
                  signOut();
                  navigate("/");
                }}
              >
                <NavLink to>SIGN OUT</NavLink>
              </li>
            ) : (
              ""
            )}

            {showMenue ? (
              <li
                className="menubar menuShowBtn1"
                onClick={() => setShowMenu(false)}
              >
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
