import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../actions/projectActions";

const AddProject = () => {
  const dispatch = useDispatch();
  const [project, setProject] = useState({
    imagePreview: "/assets/images/default_avtar.jpg",
    projectImage: "",
    name: "",
    link: "",
  });

  const changeHandler = (e) => {
    if (e.target.name === "projectImage") {
      const file = e.target.files[0];

      setProject({
        ...project,
        projectImage: file,
      });

      const reader = new FileReader();
      reader.onload = function (event) {
        setProject({
          ...project,
          imagePreview: event.target.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
      setProject({
        ...project,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("projectImage", project.projectImage);
    formData.set("name", project.name);
    formData.set("link", project.link);

    dispatch(projectActions(formData));
  };

  return (
    <div>
      <h1>Add Project</h1>

      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="form-group">
          <label>Image Review</label>
          <img
            src={project.imagePreview}
            style={{ height: "150px", width: "150px", display: "block" }}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="avatar"
            className="form-control"
            onChange={(eventt) => {
              const file = eventt.target.files[0];
              setProject({
                ...project,
                projectImage: file,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label>Project Name</label>
          <input
            className="form-control"
            placeholder="Enter Project Name"
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Project Link</label>
          <input
            className="form-control"
            placeholder="Enter Project Link"
            onChange={changeHandler}
            name="link"
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProject;
