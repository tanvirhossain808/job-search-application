import img1 from "./../../assets/jobcategory/image 2.png";
import img2 from "./../../assets/jobcategory/image 3.png";
import img3 from "./../../assets/jobcategory/image 4.png";
import img4 from "./../../assets/jobcategory/image 5.png";
import img5 from "./../../assets/jobcategory/image 6.png";
import img6 from "./../../assets/jobcategory/image 7.png";
import img7 from "./../../assets/jobcategory/image 8.png";
import img8 from "./../../assets/jobcategory/image 9.png";
import arrow from "./../../assets/jobcategory/Arrow 1.svg";
import "./JobCatagories.css";
import { Link } from "react-router-dom";
export const JobCategoriesNavigation = () => {
  return (
    <>
      <div className="explorejobsCategory">
        <div className="catogoresHeaderAndNavigate">
          <h2>
            Explore by <span className="catogoresText">categories</span>
          </h2>
          <span>
            <Link to="/jobs" className="categoriesNaviteBtnToAll">
              Show all jobs
              <img src={arrow} alt="" />
            </Link>
          </span>
        </div>
        <div className="exploreJobs">
          <div className="jobCategory">
            <div>
              <img src={img1} alt="" />
              <h3>Design</h3>
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
              <div className="jobCategoryArrow">
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
      </div>
    </>
  );
};
