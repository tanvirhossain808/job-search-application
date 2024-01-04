import "./Jobs.css";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { Job } from "../../components/Job/Job";
import axios from "axios";
import Modal from "react-responsive-modal/dist";
import EditModal from "../../components/Modal/Modal";
import ScrollToTop from "../../components/ScorllToTop/ScorllToTop";

export const Jobs = () => {
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
  console.log(jobsPost);
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
        <button onClick={addAll}></button>
      </div>
    </>
  );
};
