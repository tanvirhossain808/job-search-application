import "./AppliedJob.css";
import { Link, useNavigate } from "react-router-dom";
import { constAddToFav } from "../../utilities/AddToFav/AddToFav";
import { toast } from "react-toastify";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";

export const AppliedJob = ({
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
    applied,
  },
  job,
  handleEditJobs,
}) => {
  const { setUpdatePost } = useContext(useJobApiContext);
  const hanDelDel = (e) => {
    e.stopPropagation();
    const res = axios({
      method: "delete",
      url: `http://localhost:9000/jobs/${id}`,
      data: {
        ...job,
      },
    });
    setUpdatePost(res);
    toast.warn("Delete the jos post !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <div className="singleLatesJob allJobs">
        <div className="latestJobCompanyName">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>Company:{company}</h2>
            <h3>Location:{location}</h3>
          </div>
          <div className="close">
            <MdClose onClick={(e) => hanDelDel(e)} size={30} />
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
        </div>
        <div className="delJob isApplied">{applied ? <p>Applied</p> : ""}</div>
      </div>
    </>
  );
};
