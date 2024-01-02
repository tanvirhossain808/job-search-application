import { createContext, useEffect, useState } from "react";
import { Example } from "../components/Loading/Loading";
export const useJobApiContext = createContext([]);

export const GlobalContext = ({ children }) => {
  const [updatePost, setUpdatePost] = useState([]);
  const [jobsPost, setJobPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/jobs");
        const data = await response.json();
        setJobPost(data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [updatePost]);
  console.log(jobsPost);

  if (!jobsPost.length > 0) {
    return <Example></Example>;
  }

  return (
    <>
      {jobsPost.length > 0 ? (
        <useJobApiContext.Provider value={{ jobsPost,setUpdatePost }}>
          {children}
        </useJobApiContext.Provider>
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
};
