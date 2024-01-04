import { Link, useNavigate } from "react-router-dom";
import "./FiveLatesJobs.css";
import { constAddToFav } from "../utilities/AddToFav/AddToFav";
import { useJobApiContext } from "../GlobalContext/GlobalContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
export const FiveLatesJobs = ({
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
}) => {
  const navigate = useNavigate();

  const { setUpdatePost } = useContext(useJobApiContext);
  const handleAddToFavourite = async (e) => {
    console.log(e);
    e.stopPropagation();
    const res = await constAddToFav(id, job, favourite);
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
  const handleNavigateToJobPage = () => {
    navigate(`jobs/${id}`);
  };
  console.log(location);
  return (
    <>
      <div className="singleLatesJob" onClick={handleNavigateToJobPage}>
        <div className="latestJobCompanyName">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>Company:{company}</h2>
            <h3>Location:{location}</h3>
            <span>
              <FaHeart
                onClick={(e) => handleAddToFavourite(e)}
                fill={favourite ? "#E4007C" : ""}
                size={30}
                className="addToFavourite"
              />
            </span>
          </div>
        </div>
        <div className="latesCompanyNameOtherDetails">
          <h3>Title:{title}</h3>
          <h3>Position:{position}</h3>
          <h4>Contract:{contract}</h4>
          <h4>{postedAt}</h4>
        </div>
        <div className="newJobDes">
          <p>
            {description?.length <= 80
              ? description
              : description?.slice(0, 80)}
          </p>
        </div>
        <div className="nowJobApply-salary">
          <h4>{salary}</h4>
          <Link>
            <h4 className="newJobSalary">Apply now</h4>
          </Link>
        </div>
      </div>
    </>
  );
};
