import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiFillYoutube } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="socialSiteInfoAndLink">
            <ul>
              <li>
                <h3>Email Address</h3>
              </li>
              <li>
                <Link to={"https://mail.google.com/"}>
                  <small>halaljibika@gmail.com</small>
                </Link>
              </li>
              <li>
                <h3>Phone Number</h3>
              </li>
              <li>
                <Link>
                  <small>022332-323</small>{" "}
                </Link>
              </li>
              <li>
                <h3>Find us on</h3>
              </li>
              <li>
                <Link to={"https://job-search-application-ten.vercel.app/"}>
                  <small>@halaljibika</small>
                </Link>
              </li>
              <li>
                <Link to={"https://www.facebook.com/"}>
                  <small>
                    <FaFacebookF />
                  </small>
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <small>
                    <FaInstagram />
                  </small>
                </Link>
                <Link to={"https://bd.linkedin.com/"}>
                  <small>
                    <CiLinkedin />
                  </small>
                </Link>
                <Link to={"https://www.youtube.com/"}>
                  <small>
                    <AiFillYoutube />
                  </small>
                </Link>
              </li>
            </ul>
          </div>
          <div className="aboutUfInfo">
            <ul>
              <Link>
                <li>About us</li>
              </Link>
              <Link>
                <li>Careers</li>
              </Link>
              <Link>
                <li>Networking</li>
              </Link>
              <Link>
                <li>Partner up with us</li>
              </Link>
            </ul>
          </div>
          <div className="thankingMessage">
            <ul>
              <li className="messageSends">
                <span>
                  <input type="email" placeholder="Type your email" />
                </span>
                <button>
                  <span>
                    <MdOutgoingMail />
                  </span>
                  <span>Send</span>
                </button>
              </li>
              <li>
                <h4>Thanks for subscribing!</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
