import { createContext, useEffect, useState } from "react";
export const useJobApiContext = createContext([]);

export const GlobalContext = ({ children }) => {
  const [jobsPost, setJobPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => setJobPost(data));
  }, []);

  return (
    <>
      <useJobApiContext.Provider value={{ jobsPost }}>
        {children}
      </useJobApiContext.Provider>
    </>
  );
};
