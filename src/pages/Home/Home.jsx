import "./Home.css";

import { JobCategoriesNavigation } from "../../components/JobCatogorisNavigation/JobCatogoriesNavigation";
import { useContext } from "react";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { FiveLatesJobs } from "../../FiveLatesJobs/FiveLatesJobs";
import { HeroSection } from "../../HeroSection/HeroSection";
import { Link } from "react-router-dom";
export const Home = () => {
  const { jobsPost } = useContext(useJobApiContext);
  return (
    <>
      <div className="heroSectionContainer">
        <HeroSection></HeroSection>
      </div>
      <div className="jobNavigationCategores">
        <JobCategoriesNavigation></JobCategoriesNavigation>
      </div>

      <div className="fiveLatesJobsStyle">
        {jobsPost.map((job) => (
          <FiveLatesJobs key={job.id} job={job}></FiveLatesJobs>
        ))}
      </div>
      <div className="redrictToJobPageFromToPJobs">
        <Link to={"jobs"}>
          <button>Explore All</button>
        </Link>
      </div>
    </>
  );
};
