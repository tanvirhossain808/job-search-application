import { createContext, useEffect, useState } from "react";
export const useJobApiContext = createContext([]);

export const GlobalContext = ({ children }) => {
  const [jobsPost, setJobPost] = useState([]);
  useEffect(() => {
    fetch("https://db-beta-six.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setJobPost(data));
  }, []);
  if (!jobsPost.length < 0) {
    return <p>Loading.....</p>;
  }

  return (
    <>
      {jobsPost.length < 0 ? (
        <useJobApiContext.Provider value={{ jobsPost }}>
          {children}
        </useJobApiContext.Provider>
      ) : (
        <p>Loading.....</p>
      )}
    </>
  );
};
