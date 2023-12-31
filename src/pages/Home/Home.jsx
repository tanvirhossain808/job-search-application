import "./Home.css";
import bannerPic from "./../../assets/banner/bnr.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import img1 from "./../../assets/jobcategory/image 2.png";
import img2 from "./../../assets/jobcategory/image 3.png";
import img3 from "./../../assets/jobcategory/image 4.png";
import img4 from "./../../assets/jobcategory/image 5.png";
import img5 from "./../../assets/jobcategory/image 6.png";
import img6 from "./../../assets/jobcategory/image 7.png";
import img7 from "./../../assets/jobcategory/image 8.png";
import img8 from "./../../assets/jobcategory/image 9.png";
import arrow from "./../../assets/jobcategory/Arrow 1.svg";
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
      <div className="explorejobsCategory">
        <div className="exploreJobs">
          <div className="jobCategory">
            <div>
              <img src={img1} alt="" />
              <h3>Design</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img2} alt="" />
              <h3>Sales</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img3} alt="" />
              <h3>Marketing</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img4} alt="" />
              <h3>Finance</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img5} alt="" />
              <h3>Finance</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img6} alt="" />
              <h3>Finance</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img7} alt="" />
              <h3>Finance</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="jobCategory">
            <div>
              <img src={img8} alt="" />
              <h3>Finance</h3>
              <div>
                <span>
                  <p>256+ jobs available</p>
                </span>
                <span>
                  <img src={arrow} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="exploreJobs">
          <div className="jobCategory">d</div>
          <div className="jobCategory"></div>
          <div className="jobCategory"></div>
        </div> */}
      </div>
    </>
  );
};
