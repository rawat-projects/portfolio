import React from "react";

const Contact = () => {
  return (
    <div>
      <form autocomplete="false">
        <div className="form-group">
          <label>Phone Number</label>
          <input type="email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
