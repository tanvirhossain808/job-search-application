import "./Job.css";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiEdit } from "react-icons/ci";
import { constAddToFav } from "../../utilities/AddToFav/AddToFav";

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
    position,
  },
  job,
  setUpdatePost,
  handleEditJobs,
}) => {
  const naviGate = useNavigate();
  const hadleNavigateToSiglePage = () => {
    naviGate(`${id}`);
  };
  const handleAddToFavourite = async (e) => {
    console.log(e);
    e.stopPropagation();
    const res = constAddToFav(id, job, favourite);
    // const res = await axios({
    //   method: "put",
    //   url: `http://localhost:9000/jobs/${id}`,
    //   data: {
    //     ...job,
    //     favourite: !favourite,
    //   },
    // });
    +setUpdatePost(res);
    !favourite
      ? toast.success("Added as favourite !", {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.info(" Removed from favourite!", {
          position: toast.POSITION.TOP_RIGHT,
        });
  };
  // const handleEdit = () => {};
  const delParticularJob = async (e) => {
    e.stopPropagation();
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
            <h2>Company:{company}</h2>
            <h3>Location:{location}</h3>
          </div>
          <div className="loveEdit">
            <FaHeart
              onClick={(e) => handleAddToFavourite(e)}
              fill={favourite ? "#E4007C" : ""}
              size={30}
              className="addToFavourite"
            />
            <CiEdit
              className="edit"
              size={30}
              onClick={(e) => handleEditJobs(e, id)}
            />
          </div>
        </div>
        <div className="latesCompanyNameOtherDetails">
          <h3>Position:{position}</h3>
          <h3>Title:{title}</h3>
          <h4>Contract:{contract}</h4>
          <h4>PostedAt:{postedAt}</h4>
        </div>
        <div className="newJobDes">
          <p>
            {description?.length <= 80
              ? description
              : description?.slice(0, 80)}
            ...
          </p>
        </div>
        <div className="nowJobApply-salary">
          <h4>{salary}</h4>
          <Link>
            <h4 className="newJobSalary">Apply now</h4>
          </Link>
        </div>
        <div className="delJob">
          <button onClick={(e) => delParticularJob(e)}>Delete</button>
        </div>
      </div>
    </>
  );
};
