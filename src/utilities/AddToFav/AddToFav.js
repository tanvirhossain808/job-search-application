import axios from "axios";

export const constAddToFav = async (id, job, target, parTicularKeY) => {
  console.log(target);
  const res = await axios({
    method: "put",
    url: `http://localhost:9000/jobs/${id}`,
    data: {
      ...job,
      [parTicularKeY]: !target,
    },
  });
  return res;
};
