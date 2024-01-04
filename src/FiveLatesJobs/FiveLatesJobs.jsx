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
    const res = constAddToFav(id, job, favourite, "favourite");
    // const res = await axios({
    //   method: "put",
    //   url: `http://localhost:9000/jobs/${id}`,
    //   data: {
    //     ...job,
    //     favourite: !favourite,
    //   },
    // });
    setUpdatePost(res);
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
          <img src={logo} alt="" />

          <div className="cLocationAndName">
            <h4>{company}</h4>
            <p>Location:{location}</p>
          </div>
          <span>
            <FaHeart
              onClick={(e) => handleAddToFavourite(e)}
              fill={favourite ? "#E4007C" : ""}
              size={30}
              className="addToFavourite"
            />
          </span>
        </div>
        <div className="latesCompanyNameOtherDetails">
          <h3>Position:{position}</h3>
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
