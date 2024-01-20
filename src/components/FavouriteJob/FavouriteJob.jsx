import axios from "axios";
import "./FavouriteJob.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";

export const FavouriteJob = ({
  favJob: {
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
  favJob,
}) => {
  console.log(salary, "df");
  const { setUpdatePost } = useContext(useJobApiContext);
  const handleAddToFavourite = async () => {
    const res = await axios({
      method: "put",
      url: `https://jsonjob.onrender.com/jobs/${id}`,
      data: {
        ...favJob,
        favourite: !favourite,
      },
    });
    setUpdatePost(res);
    !favourite
      ? toast.success("Added as favourite !", {
          position: toast.POSITION.TOP_RIGHT,
        })
      : toast.info(" Removed from favourite!", {
          position: toast.POSITION.TOP_RIGHT,
        });
  };
  return (
    <>
      <div className="singleLatesJob allJobs favouriteJob">
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
      </div>
    </>
  );
};
