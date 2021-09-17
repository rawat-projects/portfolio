import React from "react";

const Contact = () => {
  return (
    <div>
      <form autocomplete="false">
        <div class="form-group">
          <label>Phone Number</label>
          <input type="email" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
