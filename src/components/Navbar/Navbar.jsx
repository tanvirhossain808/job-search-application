import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

export const Navbar = () => {
  return (
    // Home, Jobs, About, Contact, Favorite, Signup, Sign Out.

    <>
      <nav>
        <ul>
          <li className="logo">
            <img src={logo} alt="" />
          </li>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to="jobs">JOBS</NavLink>
          </li>
          <li>
            <NavLink to="abouts">ABOUT</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="favorite">FAVORITE</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="signup">SIGN UP</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="SIGNIN">SIGNIN</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="SIGNOUT">SIGN OUT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
