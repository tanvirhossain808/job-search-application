import "./Jobs.css";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Job } from "../../components/Job/Job";
import axios from "axios";
import EditModal from "../../components/Modal/Modal";
import ScrollToTop from "../../components/ScorllToTop/ScorllToTop";
import { JObsContainerFilter } from "./JobContainerFilter/JobsContainerFitler";

export const Jobs = () => {
  const jobFilterInputJobTypeArr = [
    "Job Type",
    { jobType: { type: "Full time", status: false } },
    { jobType: { type: "Part time", status: false } },
    { jobType: { type: "Remote", status: false } },
    { jobType: { type: "Internsgip", status: false } },
    { jobType: { type: "Internship", status: false } },
    { jobType: { type: "Contact", status: false } },
  ];
  const jobFilterInputJobCategoriesArr = [
    { jobCategories: { categories: "Design", status: false } },
    { jobCategories: { categories: "Sales", status: false } },
    { jobCategories: { categories: "Marketing", status: false } },
    { jobCategories: { categories: "Finance", status: false } },
    { jobCategories: { categories: "Technology", status: false } },
    { jobCategories: { categories: "Engineering", status: false } },
    { jobCategories: { categories: "Business", status: false } },
    { jobCategories: { categories: "Human resource", status: false } },
  ];
  const jobFilterInputJobLevelArr = [
    { jobLevel: { level: "Entry Level", status: false } },
    { jobLevel: { level: "Mid Level", status: false } },
    { jobLevel: { level: "Senior Level", status: false } },
    { jobLevel: { level: "Directore", status: false } },
    { jobLevel: { level: "Vip or above", status: false } },
  ];
  const jobFilterInputJobSalaryRangeArr = [
    { jobSalary: { salary: "$5-100", status: false } },
    { jobSalary: { salary: "$100-1000", status: false } },
    { jobSalary: { salary: "$1000-$5000", status: false } },
    { jobSalary: { salary: "$5000 and above", status: false } },
  ];
  window.onload = function () {
    window.scrollTo(0, 0);
  };
  const [editId, setEditId] = useState(0);
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
  const handleEditJobs = (e, id) => {
    console.log(id);
    e.stopPropagation();
    setEditId(id);
  };
  // console.log(jobsPost);
  return (
    <>
      <div>
        <ScrollToTop></ScrollToTop>
      </div>
      <div className="modal">
        <EditModal edit={{ editId, setEditId }}></EditModal>
      </div>
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
        <div className="allJobsContainer">
          <div className="jobContainerFilterFeild">
            <JObsContainerFilter
              filter={jobFilterInputJobTypeArr}
              filterBy={"type"}
            ></JObsContainerFilter>
          </div>
          <div className="jobs">
            {jobsPost.map((job) => (
              <Job
                key={job.id}
                job={job}
                setUpdatePost={setUpdatePost}
                handleEditJobs={handleEditJobs}
              ></Job>
            ))}
          </div>
        </div>
        <button onClick={addAll}></button>
      </div>
    </>
  );
};
