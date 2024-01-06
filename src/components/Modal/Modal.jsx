import "./Modal.css";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useJobApiContext } from "../../GlobalContext/GlobalContext";
import axios from "axios";
import { toast } from "react-toastify";

const EditModal = ({ edit: { editId, setEditId } }) => {
  const { jobsPost, setUpdatePost } = useContext(useJobApiContext);
  const editDetils = jobsPost.find((postEdit) => postEdit.id === +editId);
  const [doEdit, setDoEdit] = useState({
    company: "",
    description: "",
    position: "",
    title: "",
    salary: "",
    location: "",
    contract: "",
  });
  console.log(doEdit);
  console.log(jobsPost);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (editId) {
      setOpen(true);
      setDoEdit({
        company: editDetils.company,
        description: editDetils.description,
        position: editDetils.position,
        title: editDetils.title,
        salary: editDetils.salary,
        location: editDetils.location,
        contract: editDetils.contract,
      });
    }
  }, [editId]);
  const handleUpdateSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const res = await axios({
      method: "put",
      url: `http://localhost:9000/jobs/${+editId}`,
      data: {
        ...editDetils,
        ...doEdit,
      },
    });
    setUpdatePost(res);
    // console.log(res,'res')
    toast.success("Successfully updated !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    setEditId(0);
    setOpen(false);
    console.log(e);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditId(0);
        }}
      >
        <h2>Update your job details</h2>
        <form onSubmit={handleUpdateSubmit}>
          <p>
            <label htmlFor="">
              Company name : <br />
              <input
                required
                name="company"
                value={doEdit.company}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              position : <br />
              <input
                required
                name="position"
                value={doEdit.position}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              Title : <br />
              <input
                required
                name="title"
                value={doEdit.title}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              Description : <br />
              <input
                required
                name="description"
                value={doEdit.description}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              Salary : <br />
              <input
                required
                name="salary"
                value={doEdit.salary}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              Location : <br />
              <input
                required
                name="location"
                value={doEdit.location}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <p>
            <label htmlFor="firstName">
              Contract : <br />
              <input
                required
                name="contract"
                value={doEdit.contract}
                type="text"
                onChange={(e) =>
                  setDoEdit({ ...doEdit, [e.target.name]: e.target.value })
                }
              />
            </label>
          </p>
          <input type="submit" value="submit" />
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
