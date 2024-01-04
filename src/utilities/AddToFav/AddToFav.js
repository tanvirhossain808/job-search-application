import axios from "axios";

export const constAddToFav = async (id, job, favourite) => {
  const res = await axios({
    method: "put",
    url: `http://localhost:9000/jobs/${id}`,
    data: {
      ...job,
      favourite: !favourite,
    },
  });
  return res;
};
