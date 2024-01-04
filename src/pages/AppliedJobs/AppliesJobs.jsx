import { useContext } from "react";
import "./AppliedJobs.css";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { AppliedJob } from "../../components/AppliedJob/AppliedJob";
export const AppliedJobs = () => {
  const { jobsPost } = useContext(useJobApiContext);
  const appliedJobs = jobsPost?.filter((job) => job.applied === true);
  return (
    <>
      <div className="appliedJobs">
        <h2 className="appliedJobHeader">You saved total {appliedJobs.length} </h2>
        <div className="appliedJobsContainer">
          {appliedJobs.map((job) => (
            <AppliedJob key={job.id} job={job}></AppliedJob>
          ))}
        </div>
      </div>
    </>
  );
};
