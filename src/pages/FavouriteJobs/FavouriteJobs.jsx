import { useContext } from "react";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import { FavouriteJob } from "../../components/FavouriteJob/FavouriteJob";
import "./FavouriteJobs.css";
export const FavouriteJobs = () => {
  const { jobsPost } = useContext(useJobApiContext);

  const isFav = jobsPost.filter((favJobs) => favJobs.favourite === true);
  return (
    <>
      <div className="lsitOfAllFavouriteJobs">
        <h2>Your list of all your favourite jobs</h2>
        {!isFav[0] && (
          <div className="isFav">
            <h2>You have not add any job as your favourite</h2>
          </div>
        )}
        <div>
          {isFav.map((favJob) => (
            <FavouriteJob key={favJob.id} favJob={favJob}></FavouriteJob>
          ))}
        </div>
      </div>
    </>
  );
};
