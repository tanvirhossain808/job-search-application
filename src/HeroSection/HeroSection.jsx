import "./HeroSection.css";
import bannerPic from "./../assets/banner/bnr.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [user, setUser] = useState(false);
  const authUser = useAuthState(auth);
  const navigate = useNavigate();

  console.log(user);
  return (
    <>
      <div className="hero">
        <div className="HeroContainer">
          <div className="landingContainer">
            <div className="heroIntro">
              <div className="heroText">
                <h1>
                  Your Dream <br />
                  <span>Job Is Waiting.</span>{" "}
                </h1>
                <h2>10000+ Jobs</h2>
                <div className="heroSearchInput">
                  <div className="searchBYKeyWord">
                    <span>
                      <CiSearch size={"30px"} color="#10B981" />
                    </span>
                    <input
                      type="text"
                      placeholder="Enter job title, keyword"
                      name="jobTitle"
                    />
                  </div>
                  <div className="searchByLocation">
                    <span>
                      <CiLocationOn size={"30px"} color="#10B981" />
                    </span>
                    <input
                      type="text"
                      placeholder="Search Location"
                      name="location "
                    />
                    <button className="searchBtn">Search</button>
                  </div>
                </div>
              </div>
              <div className="heroImg">
                <img src={bannerPic} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="exploerNowBtn">
          {authUser[0] ? (
            ""
          ) : (
            <button
              disabled={authUser[0] ? true : false}
              onClick={() => {
                setUser([]);
                navigate("/signup");
              }}
            >
              Explore Now
            </button>
          )}
        </div>
      </div>
    </>
  );
};
