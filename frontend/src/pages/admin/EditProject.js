import React, { useState } from "react";

const EditProject = () => {
  const [state, setstate] = useState({});

  return (
    <div>
      <h1>Edit Project</h1>

      <form>
        <div className="form-group">
          <label>Image Review</label>
          <img
            src=""
            style={{ height: "200px", width: "200px", display: "block" }}
          />
        </div>
        <div className="form-group">
          <input type="file" className="form-control" />
        </div>
        <div className="form-group">
          <label>Project Name</label>
          <input className="form-control" placeholder="Enter Project Name" />
        </div>
        <div className="form-group">
          <label>Project Link</label>
          <input className="form-control" placeholder="Enter Project Link" />
        </div>
      </form>
    </div>
  );
};

export default EditProject;
