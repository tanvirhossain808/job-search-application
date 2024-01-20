import { useContext, useState } from "react";
import "./PostJob.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";

export const PostJob = () => {
  const { setJobPost } = useContext(useJobApiContext);
  const [errorPost, setErrorPost] = useState("");
  const [successPost, setSuceesPost] = useState(false);
  const [jobPost, setJobPosts] = useState({
    company: "",
    title: "",
    logo: "",
    position: "",
    location: "",
    contract: "",
    salary: "",
    description: "",
    applied: false,
    favourite: true,
  });

  console.log(jobPost);
  const handleJobPost = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonjob.onrender.com/jobs/jobs", jobPost)
      .then(function (response) {
        setSuceesPost(response);
        console.log(response);
      })
      .catch(function (error) {
        setErrorPost(error);
        console.log(error);
      });
    successPost
      ? toast.success("SuccessFully post your job post !", {
          position: toast.POSITION.TOP_CENTER,
        })
      : toast.error("FailedTo upTodate !", {
          position: toast.POSITION.TOP_CENTER,
        });
    if (errorPost) {
      return;
    }
    successPost && setJobPost([]);
  };
  return (
    <>
      <div className="formContainer">
        <h2>Post a Job</h2>
        <div className="postJob">
          <form onSubmit={handleJobPost}>
            <span className="targetForm">
              <label htmlFor="company">Company:</label>
              <input
                value={jobPost.company}
                onChange={(e) =>
                  setJobPosts({
                    ...jobPost,
                    [e.target.name]: e.target.value,
                  })
                }
                name="company"
                type="text"
                placeholder="Type company name"
              />

              <label htmlFor="title">Job Title:</label>
              <input
                name="title"
                type="text"
                value={jobPost.title}
                placeholder="Type job title"
                onChange={(e) =>
                  setJobPosts({
                    ...jobPost,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </span>

            <span className="targetForm">
              <span>
                <label htmlFor="logo">Upload Company Logo:</label>
                <input
                  name="logo"
                  value={jobPost.logo}
                  type="file"
                  onChange={(e) =>
                    setJobPosts({
                      ...jobPost,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </span>

              <span>
                <label htmlFor="position">Job Position:</label>
                <select
                  name="position"
                  value={jobPost.position}
                  id=""
                  onChange={(e) =>
                    setJobPosts({
                      ...jobPost,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  <option value="Intern">Intern</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                </select>
              </span>
            </span>

            <span className="targetForm">
              <label htmlFor="location">Location:</label>
              <input
                name="location"
                type="text"
                placeholder="Type location"
                value={jobPost.location}
                onChange={(e) =>
                  setJobPosts({
                    ...jobPost,
                    [e.target.name]: e.target.value,
                  })
                }
              />

              <label htmlFor="contract">Contract Type:</label>
              <input
                value={jobPost.contract}
                onChange={(e) =>
                  setJobPosts({
                    ...jobPost,
                    [e.target.name]: e.target.value,
                  })
                }
                name="contract"
                type="text"
                placeholder="Type contract type"
              />
            </span>

            <span className="targetForm">
              <input
                name="salary"
                type="number"
                placeholder="Type salary"
                value={jobPost.salary}
                onChange={(e) =>
                  setJobPosts({
                    ...jobPost,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </span>

            <span className="description">
              <span>
                <textarea
                  value={jobPost.des}
                  onChange={(e) =>
                    setJobPosts({
                      ...jobPost,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="description"
                  cols="30"
                  rows="10"
                  placeholder="Type company description"
                  className="postDes"
                ></textarea>
              </span>
            </span>

            <div className="formSubmit">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
