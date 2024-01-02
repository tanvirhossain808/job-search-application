import { createContext, useEffect, useState } from "react";
export const useJobApiContext = createContext([]);

export const GlobalContext = ({ children }) => {
  const [jobsPost, setJobPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://db-beta-six.vercel.app/jobs");
        const data = await response.json();
        setJobPost(data);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(jobsPost);

  if (!jobsPost.length > 0) {
    return <p>Loading.....</p>;
  }

  return (
    <>
      {jobsPost.length > 0 ? (
        <useJobApiContext.Provider value={{ jobsPost }}>
          {children}
        </useJobApiContext.Provider>
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
};
