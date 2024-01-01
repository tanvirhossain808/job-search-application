import { Link } from "react-router-dom";
import "./FiveLatesJobs.css";
export const FiveLatesJobs = ({
  job: {
    logo,
    postedAt,
    contract,
    company,
    title,
    location,
    description,
    salary,
  },
}) => {
  console.log(location);
  return (
    <>
      <div className="singleLatesJob">
        <div className="latestJobCompanyName">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>{company}</h2>
            <h3>{location}</h3>
          </div>
        </div>
        <div className="latesCompanyNameOtherDetails">
          <h3>{title}</h3>
          <h4>{contract}</h4>
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
