import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions/projectActions";
import { Select } from "antd";
import { useAlert } from "react-alert";
import "antd/dist/antd.css";
const { Option } = Select;

const AddProject = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.projects);
  const [project, setProject] = useState({
    imagePreview: "/assets/images/default_avtar.jpg",
    projectImage: "",
    name: "",
    link: "",
    languages: "",
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

  const languageChangeHandler = (e) => {
    setProject({
      ...project,
      languages: e,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("projectImage", project.projectImage);
    formData.set("name", project.name);
    formData.set("link", project.link);
    formData.set("languages", project.languages);

    dispatch(projectActions(formData));
  };

  useEffect(() => {
    if (message !== "") {
      alert.success(message);
      history.push("/admin/projects");
    }
  }, [dispatch, submitHandler, alert]);

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
        <div className="form-group">
          <label>Languages</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Languages"
            onChange={languageChangeHandler}
            name="languages"
            optionLabelProp="label"
          >
            <Option value="HTML" label="HTML">
              <div className="demo-option-label-item">HTML</div>
            </Option>
            <Option value="CSS" label="CSS">
              <div className="demo-option-label-item">CSS</div>
            </Option>
            <Option value="Javascript" label="Javascript">
              <div className="demo-option-label-item">Javascript</div>
            </Option>
            <Option value="React" label="React">
              <div className="demo-option-label-item">React</div>
            </Option>
            <Option value="MERN" label="MERN">
              <div className="demo-option-label-item">MERN</div>
            </Option>
          </Select>
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProject;
