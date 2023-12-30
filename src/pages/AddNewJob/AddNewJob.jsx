import axios from "axios";
import { useEffect, useState } from "react";

export const AddNewJob = () => {
  const [userName, setUserName] = useState("");
  const [getUser, setUser] = useState([]);
  const handleAddJob = () => {
    axios
      .post("http://localhost:9000/jobs", {
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
  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [getUser]);
  return (
    <>
      <h2>Add new job here</h2>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleAddJob}>add user</button>
    </>
  );
};
