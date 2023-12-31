import "./Home.css";
import bannerPic from "./../../assets/banner/bnr.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Home = () => {
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
        <div className="explorJobPageBtn">
          <NavLink to={"jobs"}>
            <button>See current Jobs</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
