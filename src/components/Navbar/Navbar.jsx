import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    // Home, Jobs, About, Contact, Favorite, Signup, Sign Out.

    <>
      <nav>
        <ul>
          <NavLink to="/">HOME</NavLink>

          <NavLink>JOBS</NavLink>
          <NavLink>ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink>FAVORITE</NavLink>
          <NavLink>SIGN UP</NavLink>
          <NavLink>SIGN OUt</NavLink>
        </ul>
      </nav>
    </>
  );
};
