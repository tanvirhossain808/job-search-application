import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";

export const Navbar = () => {
  return (
    // Home, Jobs, About, Contact, Favorite, Signup, Sign Out.

    <>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <NavLink to="/">HOME</NavLink>

          <NavLink to="jobs">JOBS</NavLink>
          <NavLink to="abouts">ABOUT</NavLink>
          <NavLink to="contact">CONTACT</NavLink>
          <NavLink to="favorite">FAVORITE</NavLink>
          <NavLink to="signup">SIGN UP</NavLink>
          <NavLink to="SIGNIN">SIGNIN</NavLink>
          <NavLink to="SIGNOUT">SIGN OUT</NavLink>
        </ul>
      </nav>
    </>
  );
};
