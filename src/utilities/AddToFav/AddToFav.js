// api.js
import axios from "axios";

export const constAddToFav = async (id, job, target, parTicularKeY) => {
  try {
    console.log(target);
    const res = await axios({
      method: "put",
      url: `https://jsonjob.onrender.com/jobs/${id}`,
      data: {
        ...job,
        [parTicularKeY]: !target,
      },
    });
    return res;
  } catch (error) {
    console.error("Error in constAddToFav:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};
