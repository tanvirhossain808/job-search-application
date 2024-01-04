import axios from "axios";

export const constAddToFav = async (id, job, target) => {
  const res = await axios({
    method: "put",
    url: `http://localhost:9000/jobs/${id}`,
    data: {
      ...job,
      applied: !target,
    },
  });
  return res;
};
