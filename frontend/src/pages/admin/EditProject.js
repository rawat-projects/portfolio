import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProject } from "../../actions/projectActions";
import { Select } from "antd";
import { useAlert } from "react-alert";
import { editProject } from "../../actions/projectActions";
import Loader from "../../components/Loader";
import "antd/dist/antd.css";

const EditProject = ({ match, history }) => {
  const alert = useAlert();
  const { Option } = Select;
  const dispatch = useDispatch();
  const { singleData, message } = useSelector((state) => state.projects);
  const [projectData, setProjectData] = useState({
    projectImage: "/assets/images/default_avtar.jpg",
    projectName: "",
    projectLink: "",
    projectLanguages: [],
  });

  const projectId = match.params.id;

  useEffect(() => {
    dispatch(getSingleProject(projectId));
  }, []);

  useEffect(() => {
    if (singleData) {
      const updatedData = singleData;
      setProjectData({
        projectImage: updatedData.projectImage,
        projectName: updatedData.name,
        projectLink: updatedData.link,
        projectLanguages: updatedData.languages,
      });
    }
  }, [singleData, dispatch]);

  useEffect(() => {
    if (message !== "") {
      alert.success(message);
      history.push("/admin/projects");
    }
  }, [message]);

  const changeHandler = (e) => {
    if (e.target.name === "file") {
    } else {
      setProjectData({
        ...projectData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("projectImage", projectData.projectImage);
    formData.set("name", projectData.projectName);
    formData.set("link", projectData.projectLink);
    formData.set("languages", projectData.projectLanguages);
    formData.set("projectId", projectId);

    dispatch(editProject(formData));
  };
  return (
    <>
      {singleData ? (
        <div>
          <h1>Edit Project</h1>

          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label>Image Review</label>
              <img
                src={projectData.projectImage}
                style={{ height: "200px", width: "200px", display: "block" }}
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectImage: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Project Name</label>
              <input
                className="form-control"
                name="projectName"
                placeholder="Enter Project Name"
                value={projectData.projectName}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label>Project Link</label>
              <input
                className="form-control"
                name="projectLink"
                placeholder="Enter Project Link"
                value={projectData.projectLink}
                onChange={changeHandler}
              />
            </div>
            <div className="form-group">
              <label>Languages</label>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Select Languages"
                name="projectLanguages"
                value={projectData.projectLanguages}
                optionLabelProp="label"
                onChange={(e) =>
                  setProjectData({ ...projectData, projectLanguages: e })
                }
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
            <input type="submit" value="Save" />
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default EditProject;
