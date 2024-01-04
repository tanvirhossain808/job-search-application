import { useParams } from "react-router-dom";
import "./ParticularJobInfo.css";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";
export const ParticularJobPageInfo = () => {
  const { id } = useParams();
  const { jobsPost, setUpdatePost } = useContext(useJobApiContext);
  const findParticularJob = jobsPost.find((job) => job.id === +id);
  const { title, salary, description, contract, company, logo, favourite } =
    findParticularJob;
  //   const isApplied = async () => {
  //     const res = await axios({
  //       method: "put",
  //       url: `http://localhost:9000/jobs/${18}`,
  //       data: {
  //         ...findParticularJob,
  //         isApplied: false,
  //       },
  //     });
  //     +setUpdatePost(res);
  //     !favourite
  //       ? toast.success("Added as favourite !", {
  //           position: toast.POSITION.TOP_RIGHT,
  //         })
  //       : toast.info(" Removed from favourite!", {
  //           position: toast.POSITION.TOP_RIGHT,
  //         });
  //   };

  return (
    <>
      <div className="particularJobInfo">
        <div className="facIcon">
          <FaHeart
            fill={favourite ? "#E4007C" : ""}
            size={30}
            className="addToFavourite"
          />
        </div>
        <div className="jobDis">
          <h2 className="companyName"> {company}</h2>
          <div className="companyImg">
            <img src={logo} alt="" />
          </div>
          <h3>{title}</h3>
          <h3>{salary}</h3>
          <h4>{contract}</h4>
          <div className="taksDis">
            <p>{description}</p>
          </div>
        </div>
        <div className="applyForJob">
          <button>apply For Job</button>
          {/* <button onClick={isApplied}>add is applied</button> */}
        </div>
      </div>
    </>
  );
};
