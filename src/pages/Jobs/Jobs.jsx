import "./Jobs.css";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { useContext, useEffect } from "react";
import { Job } from "../../components/Job/Job";
import axios from "axios";

export const Jobs = () => {
  const { jobsPost, setUpdatePost } = useContext(useJobApiContext);
  useEffect(() => {}, []);

  const addAll = () => {
    jobsPost.forEach((data) => {
      setTimeout(async () => {
        const res = await axios({
          method: "put",
          url: `http://localhost:9000/jobs/${data.id}`,
          data: {
            ...data,
            favourite: false,
          },
        });
        console.log(res);
      }, 1000);
    });
  };
  console.log(jobsPost);
  return (
    <>
      <div className="jobsList">
        <h2>
          Discover more than <span>5000 jobs</span>
        </h2>
        <div className="jobsSearcMain">
          <ul>
            <li>
              <input type="text" placeholder="Type your looking job" />
            </li>
            <li>
              <input type="text" placeholder="Type your location" />
              <button>Search</button>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="jobs">
          {jobsPost.map((job) => (
            <Job key={job.id} job={job} setUpdatePost={setUpdatePost}></Job>
          ))}
        </div>
        <button onClick={addAll}></button>
      </div>
    </>
  );
};
