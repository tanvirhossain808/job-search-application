import "./Job.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Job = ({
  job: {
    id,
    logo,
    postedAt,
    contract,
    company,
    title,
    location,
    description,
    salary,
    favourite,
  },
  job,
  setUpdatePost,
}) => {
  const naviGate = useNavigate();
  const hadleNavigateToSiglePage = () => {
    naviGate(`${id}`);
  };
  const handleAddToFavourite = async () => {
    const res = await axios({
      method: "put",
      url: `http://localhost:9000/jobs/${id}`,
      data: {
        ...job,
        favourite: !favourite,
      },
    });
    +setUpdatePost(res);
    !favourite
      ? toast.success("Added as favourite !", {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.info(" Removed from favourite!", {
          position: toast.POSITION.TOP_RIGHT,
        });
  };
  const delParticularJob = async () => {
    const res = await axios({
      method: "delete",
      url: `http://localhost:9000/jobs/${id}`,
      data: {
        ...job,
      },
    });
    +setUpdatePost(res);
    console.log("hey");
    toast.warn("Delete the jos post !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <div
        onClick={hadleNavigateToSiglePage}
        className="singleLatesJob allJobs"
      >
        <div className="latestJobCompanyName">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>{company}</h2>
            <h3>{location}</h3>
          </div>
          <div onClick={handleAddToFavourite}>
            <FaHeart
              fill={favourite ? "#E4007C" : ""}
              size={30}
              className="addToFavourite"
            />
          </div>
        </div>
        <div className="latesCompanyNameOtherDetails">
          <h3>{title}</h3>
          <h4>{contract}</h4>
          <h4>{postedAt}</h4>
        </div>
        <div className="newJobDes">
          <p>
            {description.length <= 80 ? description : description.slice(0, 80)}
          </p>
        </div>
        <div className="nowJobApply-salary">
          <h4>{salary}</h4>
          <Link>
            <h4 className="newJobSalary">Apply now</h4>
          </Link>
        </div>
        <div className="delJob">
          <button onClick={delParticularJob}>Delete</button>
        </div>
      </div>
    </>
  );
};
