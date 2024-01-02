import axios from "axios";
import { useEffect, useState } from "react";
import "./AddNewJob.css";
export const AddNewJob = () => {
  const [userName, setUserName] = useState("");
  const [getUser, setUser] = useState([]);
  const handleAddJob = () => {
    axios
      .post("https://db-beta-six.vercel.app/jobs", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        setUser(response);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDelete = () => {
    const postIdToDelete = 1;
    axios
      .delete(`https://db-beta-six.vercel.app/jobs/${postIdToDelete}`)
      .then((response) => {
        console.log(`Deleted post with ID ${postIdToDelete}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetch("https://db-beta-six.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [getUser]);
  return (
    <>
      <div className="heyPoorman">
        <h2>Add new job here</h2>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleAddJob}>add user</button>
        <button onClick={handleDelete}>Delete users</button>
      </div>
    </>
  );
};
